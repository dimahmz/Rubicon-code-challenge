class Responses {
  static create(success = true, title = "", description = "", payload = null) {
    const response = {
      success,
      title,
      description,
      payload,
    };
    return response;
  }

  static serverError() {
    return {
      success: false,
      title: "A server error",
      description: "an error in the server has occurred plase try again later",
    };
  }
}

module.exports = Responses;
