import * as fs from 'fs';
import { ERROR_MESSAGES } from '../constants';
import { FileNotFoundException, OpenFileException } from '../exceptions';

/**
 * @author Jeyson Luiz Romualdo
 * @export
 * @class OpenFileHelper
 */
export class OpenFileHelper {
    openFile(filename: string): string {
        try {
            const fileData = fs.readFileSync(filename);
            if (!fileData) {
                throw new FileNotFoundException(ERROR_MESSAGES.FILE_NOT_FOUND_ERROR);
            }
            return fileData.toString();
        } catch (err) {
            if (err.code == 'ENOENT') {
                throw new FileNotFoundException(ERROR_MESSAGES.FILE_NOT_FOUND_ERROR, err.message);
            }
            throw new OpenFileException(ERROR_MESSAGES.OPEN_FILE_ERROR, err.message);
        }
    }
}
