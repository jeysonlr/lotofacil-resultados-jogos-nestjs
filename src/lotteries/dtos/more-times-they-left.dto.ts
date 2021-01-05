import { IsNotEmpty } from "class-validator";

/**
 * @author Jeyson Luiz Romualdo
 * @export
 * @class MoreTimesTheyLeftDto
 */
export class MoreTimesTheyLeftDto {

    @IsNotEmpty()
    number: number;

    @IsNotEmpty()
    numberOfTimes: number;
}
