import { IsNotEmpty } from "class-validator";

/**
 * @author Jeyson Luiz Romualdo
 * @export
 * @class LessTimesLeftDto
 */
export class LessTimesLeftDto {
    @IsNotEmpty()
    number: number;

    @IsNotEmpty()
    numberOfTimes: number;
}
