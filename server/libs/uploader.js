import multer from 'multer'
import { randomBytes } from 'node:crypto'
import { mkdirSync, existsSync } from 'node:fs'
import { dataPath, uploadFields } from './consts.js'
import { getUploadPathName } from './util.js'

/**
 * 이미지 업로드 모듈
 */
export function uploader(options = {})
{
  return {
    storage: multer.diskStorage({
      // 파일을 저장하는 위치를 제어한다.
      destination: (req, file, cb) => {
        let path = dataPath
        switch (file.fieldname)
        {
          case uploadFields.original:
            path += getUploadPathName(uploadFields.original)
            break
          case uploadFields.cover:
            path += getUploadPathName(uploadFields.cover)
            break
          case uploadFields.cache:
            path += getUploadPathName(uploadFields.cache)
            break
          default:
            path += '/tmp'
            break
        }
        if (!existsSync(path)) mkdirSync(path, { recursive: true })
        cb(null, path)
      },
      // 파일이름을 조정한다.
      filename: (req, file, cb) => {
        let name = randomBytes(18).toString('hex')
        switch (file.fieldname)
        {
          case uploadFields.original:
            name = `or-${name}`
            break
          case uploadFields.cover:
            name = `cv-${name}`
            break
          case uploadFields.cache:
            name = `ch-${name}`
            break
        }
        cb(null, name)
      },
    }),
    /**
     * 파일 업로드를 허용할지 안할지에 대하여 판단하는 영역
     */
    fileFilter: (req, file, cb) => {
      let allow = true
      // TODO: 나중에 허용하지 않은 파일 타입이라면 거부할 수 있어야 한다.
      switch (file.fieldname)
      {
        case uploadFields.original:
        case uploadFields.cover:
        case uploadFields.cache:
          allow = false
          break
      }
      cb(null, allow)
    },
  }
}