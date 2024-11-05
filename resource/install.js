import { exit } from 'node:process'
import { rm, mkdir, exists } from 'node:fs/promises'
import { Database } from 'bun:sqlite'
import { message, prompt } from './libs.js'
import { dataPath } from '../server/libs/consts.js'

const paths = {
  seedDB: 'resource/seed.sql',
  db: `${dataPath}/db.sqlite`,
}
const pathList = [
  `${dataPath}/original`,
  `${dataPath}/cover`,
  `${dataPath}/cache`,
  `${dataPath}/logs`,
  `${dataPath}/tmp`,
]
let db

/**
 * 인스톨을 진행 할 것인지에 대한 확인
 * @return {Promise<boolean>}
 */
async function confirmInstall()
{
  let answer = await prompt('Do you really want to INSTALL? [y/N]')
  return answer.toLowerCase() === 'y'
}

/**
 * 인스톨이 되어있는지 검사하기
 * @return {Promise<boolean>}
 */
async function checkInstall()
{
  const res = await Promise.all([
    ...(pathList.map(path => exists(path))),
    exists(paths.db),
  ])
  return res.includes(true)
}

/**
 * create directories
 * @return {Promise<void>}
 */
async function createDirectories()
{
  await Promise.all(pathList.map(path => {
    return mkdir(path, { recursive: true })
  }))
  message('run', 'Create data directories.')
}

/**
 * create database
 * @return {Promise<void>}
 */
async function createDatabase()
{
  try
  {
    db = new Database(paths.db, {
      create: true,
    })
    let seed = Bun.file(paths.seedDB)
    seed = await seed.text()
    db.exec(seed)
    message('run', 'Create database.')
  }
  catch (e)
  {
    message('error', e.message)
    exit()
  }
}

/**
 * print oauth guide
 */
function printOAuthGuide()
{
  message('info', 'For authentication, it is necessary to update the .env file.')
  message('info', 'Please refer to the document at the following link.')
  message('info', 'https://github.com/gooose-eth/slideshow-service')
}

/**
 * uninstall
 * @return {Promise<boolean>}
 */
async function uninstall()
{
  const confirmUninstall = await prompt('Do you really want to UNINSTALL? [y/N]')
  if (confirmUninstall.toLowerCase() === 'y')
  {
    await removeData()
  }
  else
  {
    message('error', `Can't proceed because the data already exists.`)
    exit()
  }
}

/**
 * remove data
 * @return {Promise<void>}
 */
async function removeData()
{
  const exist = await exists(dataPath)
  if (exist) await rm(dataPath, { recursive: true })
}

// run process
message('start', 'Install slideshow service.')
const installed = await checkInstall()
if (installed) await uninstall()
if (!(await confirmInstall()))
{
  message('error', 'Cancel installation.')
  exit()
}
await createDirectories()
await createDatabase()
printOAuthGuide()

// complete
message('exit', 'Complete install.')
if (db) db.close()
exit()
