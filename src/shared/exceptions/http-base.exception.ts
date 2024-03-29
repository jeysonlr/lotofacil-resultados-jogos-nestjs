import { isObject, isString } from 'util';
import { ErrorResponseDataDto, RequestError } from '../dtos';
import { HttpInternalMessages } from '../enums';


/**
 * Defines the base Nest HTTP exception, which is handled by the default
 * Exceptions Handler.
 *
 * @see [Base Exceptions](https://docs.nestjs.com/exception-filters#base-exceptions)
 *
 * @publicApi
 */
export class HttpBaseException extends Error {
    /**
     * Instantiate a plain HTTP Exception.
     *
     * @example
     * `throw new HttpException()`
     *
     * @usageNotes
     * The constructor arguments define the response and the HTTP response status code.
     * - The `response` argument (required) defines the JSON response body.
     * - The `status` argument (required) defines the HTTP Status Code.
     *
     * By default, the JSON response body contains two properties:
     * - `statusCode`: the Http Status Code.
     * - `message`: a short description of the HTTP error by default; override this
     * by supplying a string in the `response` parameter.
     *
     * To override the entire JSON response body, pass an object to the `createBody`
     * method. Nest will serialize the object and return it as the JSON response body.
     *
     * The `status` argument is required, and should be a valid HTTP status code.
     * Best practice is to use the `HttpStatus` enum imported from `nestjs/common`.
     *
     * @param response string or object describing the error condition.
     * @param status HTTP response status code.
     */
    constructor(
        private readonly response: ErrorResponseDataDto,
        private readonly status: number,
    ) {
        super();
        this.initMessage();
    }

    /**
     * @memberof HttpBaseException
     */
    public initMessage() {

        if (isString(this.response)) {
            this.message = this.response;
        } else if (
            isObject(this.response) &&
            isString((this.response as Record<string, any>).message)
        ) {
            this.message = (this.response as Record<string, any>).message;
        } else if (this.constructor) {
            this.message = this.constructor.name
                .match(/[A-Z][a-z]+|[0-9]+/g)
                .join(' ');
        }
    }

    /**
     * @return {*}  {ErrorResponseDataDto}
     * @memberof HttpBaseException
     */
    public getResponse(): ErrorResponseDataDto {
        return this.response;
    }

    /**
     * @return {*}  {number}
     * @memberof HttpBaseException
     */
    public getStatus(): number {
        return this.status;
    }

    /**
     * @static
     * @param {(object | string)} objectOrError
     * @param {string} [message]
     * @param {(string | HttpInternalMessages)} [internalMessage]
     * @param {number} [statusCode]
     * @return {*}
     * @memberof HttpBaseException
     */
    public static createBody(
        objectOrError: object | string,
        message?: string,
        internalMessage?: string | HttpInternalMessages,
        statusCode?: number,
    ) {
        if (!objectOrError) {
            return new ErrorResponseDataDto(
                message,
                [],
                internalMessage,
                statusCode,
            );
        }

        if (isString(objectOrError)) {
            return new ErrorResponseDataDto(
                message,
                [new RequestError(objectOrError)],
                internalMessage,
                statusCode
            );
        }

        if (isObject(objectOrError) && !Array.isArray(objectOrError)) {
            return new ErrorResponseDataDto(
                message,
                objectOrError as RequestError[],
                internalMessage,
                statusCode,
            );
        }

        return new ErrorResponseDataDto(
            message,
            objectOrError as RequestError[],
            internalMessage,
            statusCode,
        );
    }
}
