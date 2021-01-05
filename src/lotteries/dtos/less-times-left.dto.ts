import { IsNotEmpty } from "class-validator";

export class LessTimesLeftDto {
    @IsNotEmpty()
    number: number;

    @IsNotEmpty()
    numberOfTimes: number;
}
