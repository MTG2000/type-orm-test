class BaseResponse {
  title;
  message;

  constructor(title = "", message = "") {
    this.title = title;
    this.message = message;
  }
}

class Success extends BaseResponse {}

class Data extends BaseResponse {
  data;
  constructor(data, title = "", message = "") {
    super(title, message);
    this.data = data;
  }
}

class ErrorResponse extends BaseResponse {
  status;
  constructor(status, title, message) {
    super(title, message);
    this.status = status;
  }
}

export default {
  Success,
  Data,
  ErrorResponse,
};
