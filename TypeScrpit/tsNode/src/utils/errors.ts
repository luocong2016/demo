export interface FieldError {
  message: string,
  type: string,
  path: string[],
}


export class AppError extends Error {

  public code: number;
  public error: Error;

  constructor(code: number, message: string, error?: Error) {
    super(message);

    this.code = code;
    this.error = error;
  }

  public toModel() {
    return {
      code: this.code,
      message: this.message,
    }
  }

}

export class NotFountError extends AppError {

  constructor(message: string) {
    super(20000, message);
  }
  
}

export class FieldValidationError extends AppError {

  public fields: FieldError[];

  constructor(message: string, fields: FieldError[], error?: Error) {
    super(30001, message, error);
    this.fields = fields;
  }

  public toModel() {
    return {
      code: this.code,
      message: this.message,
      fields: this.fields
    }
  }

}

export class UnauthorizeError extends AppError {

  constructor(error?: Error) {
    super(30002, '未授权的用户', error);
  }

}

export class PermissionError extends AppError {

  constructor(error?: Error) {
    super(30003, '权限被拒绝', error);
  }
}

