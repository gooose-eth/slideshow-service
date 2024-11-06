import { hrtime } from 'node:process'

class RunningTimer {

  /**
   * @property {number} startTime
   * @property {number} endTime
   */

  startTime
  endTime

  constructor()
  {
    this.startTime = hrtime.bigint()
  }
  stop()
  {
    this.endTime = hrtime.bigint()
  }
  /**
   * @return {string}
   */
  result()
  {
    return ((this.endTime - this.startTime) / 1000000n).toString() + 'ms'
  }
  end()
  {
    this.stop()
    return this.result()
  }

}

export default RunningTimer
