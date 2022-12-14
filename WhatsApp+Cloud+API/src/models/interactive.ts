/**
 * WhatsApp Cloud APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Action, actionSchema } from './action';
import { Body, bodySchema } from './body';
import { Footer, footerSchema } from './footer';
import { Header, headerSchema } from './header';
import {
  InteractiveTypeEnum,
  interactiveTypeEnumSchema,
} from './interactiveTypeEnum';

export interface Interactive {
  action: Action;
  body: Body;
  footer?: Footer;
  header?: Header;
  /** The type of interactive message you want to send. */
  type: InteractiveTypeEnum;
}

export const interactiveSchema: Schema<Interactive> = object({
  action: ['action', lazy(() => actionSchema)],
  body: ['body', lazy(() => bodySchema)],
  footer: ['footer', optional(lazy(() => footerSchema))],
  header: ['header', optional(lazy(() => headerSchema))],
  type: ['type', interactiveTypeEnumSchema],
});
