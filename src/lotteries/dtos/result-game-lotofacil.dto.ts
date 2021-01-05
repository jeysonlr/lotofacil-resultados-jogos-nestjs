import { IsNotEmpty } from "class-validator";
import { RandomGamesDto } from "./random-games.dto";
import { LessTimesLeftDto } from "./less-times-left.dto";
import { MoreTimesTheyLeftDto } from "./more-times-they-left.dto";

/**
 * @author Jeyson Luiz Romualdo
 * @export
 * @class ResultGameLotofacilDto
 */
export class ResultGameLotofacilDto {
    @IsNotEmpty()
    moreTimesTheyLeft: MoreTimesTheyLeftDto;

    @IsNotEmpty()
    lessTimesLeft: LessTimesLeftDto;

    @IsNotEmpty()
    randomGames: RandomGamesDto;
}
