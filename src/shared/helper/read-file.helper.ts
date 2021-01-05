import { Injectable } from '@nestjs/common';
import { ERROR_MESSAGES } from '../constants';
import { OpenFileHelper } from './open-file.helper';
import { FileNotFoundException, OpenFileException, ReadFileException } from '../exceptions';

/**
 * @author Jeyson Luiz Romualdo
 * @export
 * @class ReadFileHelper
 */
@Injectable()
export class ReadFileHelper {
    constructor(
        protected openFileHelper: OpenFileHelper
    ) { }

    /**
     * @param {string} path
     * @param {string} filename
     * @return {*}  {string}
     * @memberof ReadFileHelper
     */
    read(path: string, filename: string): string {
        try {
            const file = `${path}/${filename}`;
            return this.openFileHelper.openFile(file);
        } catch (err) {
            if (err instanceof FileNotFoundException) {
                throw err;
            }

            if (err instanceof OpenFileException) {
                throw err;
            }

            throw new ReadFileException(ERROR_MESSAGES.READ_FILE_ERROR);
        }
    }
}
