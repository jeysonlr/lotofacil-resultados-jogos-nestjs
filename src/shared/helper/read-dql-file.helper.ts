import { Injectable } from '@nestjs/common';
import { ERROR_MESSAGES, PATH } from '../constants';
import { ReadFileHelper } from './read-file.helper';
import { FileNotFoundException, OpenFileException, ReadDqlFileException, ReadFileException } from '../exceptions';

/**
 * @author Jeyson Luiz Romualdo
 * @export
 * @class ReadDqlFileHelper
 */
@Injectable()
export class ReadDqlFileHelper {
    constructor(
        protected readFileHelper: ReadFileHelper,
    ) { }

    /**
     * @param {string} filename
     * @return {*}  {string}
     * @memberof ReadDqlFileHelper
     */
    read(filename: string): string {
        try {
            const path = PATH.PATH_DATA_DQL;
            return this.readFileHelper.read(path, filename);

        } catch (err) {
            if (err instanceof FileNotFoundException) {
                throw err;
            }

            if (err instanceof OpenFileException) {
                throw err;
            }

            if (err instanceof ReadFileException) {
                throw err;
            }

            throw new ReadDqlFileException(ERROR_MESSAGES.READ_DQL_FILE_ERROR);
        }
    }
}
