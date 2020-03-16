class ApiErrorHandler {
  constructor(errorCode, hadler) {
    this.errorCode = errorCode;
    this.hadler = hadler;
  }
}

export default ApiErrorHandler;