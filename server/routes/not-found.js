/**
 * [404] *
 *
 * Not found
 */

import { error } from '../output.js'

export default async (req, res) => {

  error(req, res, {
    code: 404,
    message: 'Not found.',
  })

}
