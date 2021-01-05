import { IsNotEmpty } from "class-validator";

export class MoreTimesTheyLeftDto {

    @IsNotEmpty()
    number: number;

    @IsNotEmpty()
    numberOfTimes: number;
}
