import { Users } from '../users.entity';

export class UserDTO {
  readonly id: number;

  readonly firstName: string;

  readonly lastName: string;

  readonly email: string;

  readonly countryCode: string;

  readonly phone: string;

  readonly address: string;

  readonly lat: string;

  readonly long: string;

  readonly isEmailVerified: number;

  readonly isBlockedByAdmin: number;

  readonly firstCreated: Date;

  readonly lastModified: Date;

  constructor(users: Users) {
    this.id = users.id;
    this.firstName = users.firstName;
    this.lastName = users.lastName;
    this.email = users.email;
    this.countryCode = users.countryCode;
    this.phone = users.phone;
    this.address = users.address;
    this.lat = users.lat;
    this.long = users.long;
    this.isEmailVerified = users.isEmailVerified;
    this.isBlockedByAdmin = users.isBlockedByAdmin;
    this.firstCreated = users.firstCreated;
    this.lastModified = users.lastModified;
  }
}
