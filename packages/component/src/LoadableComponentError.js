class LoadableComponentError extends Error {
  constructor(message, options) {
    super(message)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, LoadableComponentError)
    }

    this.name = 'LoadableComponentError'
    this.fileName = options.fileName
    this.chunkName = options.chunkName
  }
}

export default LoadableComponentError