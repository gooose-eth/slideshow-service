class ServiceError extends Error {

  /**
   * @param {string} message
   * @param {number} code
   * @param {string} comment
   */
  constructor(message, code = 500, comment = undefined)
  {
    super(message)
    this.code = code
    this.comment = comment
  }

}

export default ServiceError
