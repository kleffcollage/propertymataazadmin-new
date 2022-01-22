/* tslint:disable */
import { Application } from './application';
import { Cleaning } from './cleaning';
import { Code } from './code';
import { Complaints } from './complaints';
import { Inspections } from './inspections';
import { Media } from './media';
import { Property } from './property';
import { RentRelief } from './rent-relief';
import { Report } from './report';
import { Tenancy } from './tenancy';
import { Transaction } from './transaction';
import { UserEnquiry } from './user-enquiry';

export interface User {
  id?: number;
  userName?: null | string;
  normalizedUserName?: null | string;
  email?: null | string;
  normalizedEmail?: null | string;
  emailConfirmed?: boolean;
  passwordHash?: null | string;
  securityStamp?: null | string;
  concurrencyStamp?: null | string;
  phoneNumber?: null | string;
  phoneNumberConfirmed?: boolean;
  twoFactorEnabled?: boolean;
  lockoutEnd?: null | string;
  lockoutEnabled?: boolean;
  accessFailedCount?: number;
  firstName: string;
  lastName: string;
  password: string;
  token?: null | string;
  dateCreated?: string;
  dateModified?: string;
  codes?: null | Array<Code>;
  reports?: null | Array<Report>;
  applications?: null | Array<Application>;
  middleName?: null | string;
  address?: null | string;
  dateOfBirth?: string;
  nationality?: null | string;
  maritalStatus?: null | string;
  employer?: null | string;
  occupation?: null | string;
  workAddress?: null | string;
  annualIncome?: null | string;
  profilePictureId?: null | number;
  profilePicture?: Media;
  passportPhotographId?: null | number;
  passportPhotograph?: Media;
  workIdId?: null | number;
  workId?: Media;
  transactions?: null | Array<Transaction>;
  isAdmin?: boolean;
  properties?: null | Array<Property>;
  userEnquiries?: null | Array<UserEnquiry>;
  inspections?: null | Array<Inspections>;
  cleanings?: null | Array<Cleaning>;
  rentReliefs?: null | Array<RentRelief>;
  tenancies?: null | Array<Tenancy>;
  complaints?: null | Array<Complaints>;
  myTenancies?: null | Array<Tenancy>;
  bank?: null | string;
  accountNumber?: null | string;
}
