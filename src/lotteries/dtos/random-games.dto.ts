import { IsNotEmpty } from "class-validator";

export class RandomGames {
    @IsNotEmpty()
    randomGamesOne: number[];

    @IsNotEmpty()
    randomGamesTwo: number[];

    @IsNotEmpty()
    randomGamesThree: number[];
}
