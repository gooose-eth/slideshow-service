import fs from 'fs';
import readline from 'readline';
import dotenv from 'dotenv';
import { exit } from '../server/libs/util.js';
import { setup as setupDatabase, destroy as destroyDatabase, changePassword } from '../server/db/setup.js';

const args = process.argv;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const assets = {
  script: `./resource/tool.js`,
  dirResource: `resource`,
};
let step = 0;

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

async function resetPassword()
{
  try
  {
    dotenv.config();
    if (!(args[3] && args[4])) throw new Error('no address and password');
    let address = args[3];
    let password = args[4];
    await changePassword(address, password);
    console.log(`COMPLETE RESET PASSWORD! => ${address}`);
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
    exit();
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
    rl.setPrompt('> Do you really want to uninstall it? (y/N): ');
    rl.prompt();
    break;

  case 'reset-password':
    await resetPassword();
    exit();
    break;

  default:
    console.group('Command guide:');
    console.log(`"node ${assets.script} install": Install service`);
    console.log(`"node ${assets.script} setup-database": Setup database`);
    console.log(`"node ${assets.script} uninstall": Uninstall project`);
    console.log(`"node ${assets.script} reset-password {ADDRESS} {PASSWORD}": reset-password`);
    console.groupEnd();
    exit();
    break;
}
