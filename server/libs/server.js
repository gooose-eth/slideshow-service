/**
 * open server message
 * @param {string} host
 * @param {number} port
 * @param {boolean} isDev
 */
export function openServerMessage(host, port, isDev)
{
  const assets = {
    cyan: '\x1b[36m',
    yellow: '\x1b[33m',
    reset: '\x1b[0m',
    line: Array(40).fill('=').join(''),
    development: 'Development',
    production: 'Production',
  }
  const colorText = (message, color) => (`${assets[color]}${message}${assets.reset}`)
  console.log(assets.line)
  console.log(`| ${colorText(isDev ? assets.development : assets.production, 'yellow')} server running at:`)
  console.log(`| >> Local: ${colorText(`http://${host}:${port}`, 'cyan')}`)
  console.log(assets.line)
}
