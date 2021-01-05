import { IsNotEmpty } from "class-validator";
import { RandomGames } from "./random-games.dto";
import { LessTimesLeftDto } from "./less-times-left.dto";
import { MoreTimesTheyLeftDto } from "./more-times-they-left.dto";

export class ResultGameLotofacil {
    @IsNotEmpty()
    moreTimesTheyLeft: MoreTimesTheyLeftDto;

    @IsNotEmpty()
    lessTimesLeft: LessTimesLeftDto;

    @IsNotEmpty()
    randomGames: RandomGames;
}
