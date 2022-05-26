import fs from 'fs';
import readline from 'readline';
import dotenv from 'dotenv';
import { exit } from '../server/libs/util.js';
import { setup as setupDatabase, destroy as destroyDatabase } from '../server/db/setup.js';

const args = process.argv;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const assets = {
  script: `./resource/tool.js`,
  dirResource: `resource`,
};

async function uninstall(keyword)
{
  try
  {
    if (keyword.toLowerCase() !== 'y') rl.close();
    dotenv.config();
    fs.rmSync(`.env`);
    await destroyDatabase();
    rl.close();
  }
  catch (e)
  {
    exit(e);
  }
}

/**
 * ACTION SWITCH
 */
switch (args[2])
{
  case 'install':
    if (!fs.existsSync('.env'))
    {
      fs.copyFileSync(`${assets.dirResource}/.env`, `.env`);
    }
    console.log(`Complete install. Please edit '.env' file.`);
    rl.close();
    break;

  case 'setup-database':
    dotenv.config();
    await setupDatabase();
    console.log('Complete setup database.');
    exit();
    break;

  case 'uninstall':
    rl.on('line', uninstall);
    rl.on('close', () => exit());
    rl.setPrompt('> Do you really want to uninstall it? (y/N) : ');
    rl.prompt();
    break;

  default:
    console.group('Command guide:');
    console.log(`"node ${assets.script} install": Install service`);
    console.log(`"node ${assets.script} setup-database": Setup database`);
    console.log(`"node ${assets.script} uninstall": Uninstall project`);
    console.groupEnd();
    exit();
    break;
}
