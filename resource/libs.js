import { stdin, stdout } from 'node:process'
import { createInterface } from 'node:readline/promises'

/**
 * message
 * @param {'start'|'error'|'exit'|'run'|string} type
 * @param {string} msg
 */
export function message(type, msg)
{
  switch (type)
  {
    case 'start':
      console.log('='.repeat(42))
      console.log('🪴', msg)
      console.log('='.repeat(42))
      break
    case 'error':
      console.error('❌', msg)
      break
    case 'exit':
      console.log('✅', msg)
      break
    case 'run':
      console.log('⌛', msg)
      break
    case 'info':
      console.log('💡', msg)
      break
    default:
      console.log(msg)
      break
  }
}

export async function prompt(message)
{
  const rl = createInterface({
    input: stdin,
    output: stdout,
  })
  const answer = await rl.question(`${message} `)
  rl.close()
  return answer
}