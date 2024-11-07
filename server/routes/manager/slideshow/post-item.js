/**
 * [POST] /api/slideshow/
 *
 * 슬라이드쇼 / 만들기
 */

import { randomBytes } from 'node:crypto'
import { success, error } from '../../../output.js'
import { connect, disconnect, tables, getItem, addItem } from '../../../libs/db.js'
import { slideshowStatus } from '../../../../global/consts.js'
import ServiceError from '../../../libs/ServiceError.js'

export default async (req, res) => {
  try
  {
    const { id } = req.params
    let data

    // connect db
    connect({ readwrite: true })

    // TODO: check auth

    if (id)
    {
      // id로 아이템을 가져온다. 없으면 오류
      const item = getItem({
        table: tables.slideshow,
        where: 'id = $id',
        values: { '$id': id },
      })
      if (!item.data?.id) throw new ServiceError('슬라이드쇼 데이터가 없습니다.', 204)
      data = item.data
    }
    else
    {
      // status=ready 아이템이 있으면 그걸로 가져오고, 없으면 새로 만들고 그걸로 가져온다.
      const item = getItem({
        table: tables.slideshow,
        where: 'status = $status',
        values: { '$status': slideshowStatus.READY },
      })
      if (item.data?.id)
      {
        data = item.data
      }
      else
      {
        const code = randomBytes(6).toString('hex')
        const addedItemId = addItem({
          table: tables.slideshow,
          values: [
            { key: 'code', value: code },
            { key: 'status', value: slideshowStatus.READY },
            { key: 'regdate', valueName: 'CURRENT_TIMESTAMP' },
            { key: 'updated_at', valueName: 'CURRENT_TIMESTAMP' },
          ],
        })
        if (!addedItemId.data) throw new ServiceError('슬라이드쇼 데이터를 만들지 못했습니다.', 500)
        const item = getItem({
          table: tables.slideshow,
          where: 'id = $id',
          values: { '$id': addedItemId.data },
        })
        if (!item.data?.id) throw new ServiceError('슬라이드쇼 데이터를 만들지 못했습니다.', 500)
        data = item.data
      }
    }

    // filtering data
    data = filteringItem(data)

    // close db
    disconnect()
    // result
    success(req, res, {
      message: '슬라이드쇼를 만들거나 수정을 위한 데이터를 가져왔습니다.',
      data: {
        ...data,
      },
    })
  }
  catch (e)
  {
    error(req, res, {
      code: e.code,
      message: '슬라이드쇼를 만드는데 문제가 생겼습니다.',
      _file: __filename,
      _err: e,
    })
  }
}

function filteringItem(src)
{
  src.slides = JSON.parse(src.slides)
  src.preference = JSON.parse(src.preference)
  src.json = JSON.parse(src.json)
  return src
}
