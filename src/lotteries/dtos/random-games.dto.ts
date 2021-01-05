import { IsNotEmpty } from "class-validator";

/**
 * @author Jeyson Luiz Romualdo
 * @export
 * @class RandomGamesDto
 */
export class RandomGamesDto {
    @IsNotEmpty()
    randomGamesOne: number[];

    @IsNotEmpty()
    randomGamesTwo: number[];

    @IsNotEmpty()
    randomGamesThree: number[];
}
