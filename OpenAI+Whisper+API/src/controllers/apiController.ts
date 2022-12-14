/**
 * OpenAI Whisper APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, FileWrapper, RequestOptions } from '../core';
import { HTTPValidationError } from '../errors/hTTPValidationError';
import { LanguageEnum, languageEnumSchema } from '../models/languageEnum';
import { TaskEnum, taskEnumSchema } from '../models/taskEnum';
import { optional, unknown } from '../schema';
import { BaseController } from './baseController';

export class ApiController extends BaseController {
  /**
   * Transcribe File
   *
   * @param audioFile
   * @param task       Example: transcribe
   * @param language
   * @return Response from the API call
   */
  async transcribeFileAsrPost(
    audioFile: FileWrapper,
    task?: TaskEnum,
    language?: LanguageEnum,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('POST', '/asr');
    const mapped = req.prepareArgs({
      task: [task, optional(taskEnumSchema)],
      language: [language, optional(languageEnumSchema)],
    });
    req.query('task', mapped.task);
    req.query('language', mapped.language);
    req.formData({
      audio_file: audioFile,
    });
    req.throwOn(422, HTTPValidationError, 'Validation Error');
    return req.callAsJson(unknown(), requestOptions);
  }

  /**
   * Language Detection
   *
   * @param audioFile
   * @return Response from the API call
   */
  async languageDetectionDetectLanguagePost(
    audioFile: FileWrapper,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('POST', '/detect-language');
    req.formData({
      audio_file: audioFile,
    });
    req.throwOn(422, HTTPValidationError, 'Validation Error');
    return req.callAsJson(unknown(), requestOptions);
  }

  /**
   * Transcribe File2Srt
   *
   * @param audioFile
   * @param task       Example: transcribe
   * @param language
   * @return Response from the API call
   */
  async transcribeFile2srtGetSrtPost(
    audioFile: FileWrapper,
    task?: TaskEnum,
    language?: LanguageEnum,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST', '/get-srt');
    const mapped = req.prepareArgs({
      task: [task, optional(taskEnumSchema)],
      language: [language, optional(languageEnumSchema)],
    });
    req.query('task', mapped.task);
    req.query('language', mapped.language);
    req.formData({
      audio_file: audioFile,
    });
    req.throwOn(422, HTTPValidationError, 'Validation Error');
    return req.call(requestOptions);
  }

  /**
   * Transcribe File2Vtt
   *
   * @param audioFile
   * @param task       Example: transcribe
   * @param language
   * @return Response from the API call
   */
  async transcribeFile2vttGetVttPost(
    audioFile: FileWrapper,
    task?: TaskEnum,
    language?: LanguageEnum,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST', '/get-vtt');
    const mapped = req.prepareArgs({
      task: [task, optional(taskEnumSchema)],
      language: [language, optional(languageEnumSchema)],
    });
    req.query('task', mapped.task);
    req.query('language', mapped.language);
    req.formData({
      audio_file: audioFile,
    });
    req.throwOn(422, HTTPValidationError, 'Validation Error');
    return req.call(requestOptions);
  }
}
