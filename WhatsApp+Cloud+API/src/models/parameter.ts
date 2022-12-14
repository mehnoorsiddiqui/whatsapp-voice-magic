/**
 * WhatsApp Cloud APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { Currency, currencySchema } from './currency';
import { DateTimeObject, dateTimeObjectSchema } from './dateTimeObject';
import { Document, documentSchema } from './document';
import { Image, imageSchema } from './image';
import {
  ParameterTypeEnum,
  parameterTypeEnumSchema,
} from './parameterTypeEnum';
import { Video, videoSchema } from './video';

export interface Parameter {
  type: ParameterTypeEnum;
  /** Required when type=text. The message’s text. For the header component, the character limit is 60 characters. For the body component, the character limit is 1024 characters. */
  text?: string;
  currency?: Currency;
  dateTime?: DateTimeObject;
  image?: Image;
  document?: Document;
  video?: Video;
}

export const parameterSchema: Schema<Parameter> = object({
  type: ['type', parameterTypeEnumSchema],
  text: ['text', optional(string())],
  currency: ['currency', optional(lazy(() => currencySchema))],
  dateTime: ['date_time', optional(lazy(() => dateTimeObjectSchema))],
  image: ['image', optional(lazy(() => imageSchema))],
  document: ['document', optional(lazy(() => documentSchema))],
  video: ['video', optional(lazy(() => videoSchema))],
});
