/**
 * WhatsApp Cloud APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { Address, addressSchema } from './address';
import { EmailObject, emailObjectSchema } from './emailObject';
import { Name, nameSchema } from './name';
import { Org, orgSchema } from './org';
import { PhoneObject, phoneObjectSchema } from './phoneObject';
import { UrlObject, urlObjectSchema } from './urlObject';

export interface Contact {
  /** Full contact address(es) */
  addresses?: Address[];
  birthday?: string;
  /** Contact email address(es) */
  emails?: EmailObject[];
  name: Name;
  org?: Org;
  /** Contact phone number(s) */
  phones?: PhoneObject[];
  /** Contact URL(s) */
  urls?: UrlObject[];
}

export const contactSchema: Schema<Contact> = object({
  addresses: ['addresses', optional(array(lazy(() => addressSchema)))],
  birthday: ['birthday', optional(string())],
  emails: ['emails', optional(array(lazy(() => emailObjectSchema)))],
  name: ['name', lazy(() => nameSchema)],
  org: ['org', optional(lazy(() => orgSchema))],
  phones: ['phones', optional(array(lazy(() => phoneObjectSchema)))],
  urls: ['urls', optional(array(lazy(() => urlObjectSchema)))],
});
