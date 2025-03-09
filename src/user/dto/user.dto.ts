export class RegisterUserDto {
  email: string;
  name: string;
  password: string;
}

export class UserResponseDto {
  id: number;
  email: string;
  name: string;
  token?: string;
  message?: string;
}

export class MailVerificationRequestDto {
  id: number;
  token: string;
}

export class MailVerificationResponseDto {
  message: string;
}