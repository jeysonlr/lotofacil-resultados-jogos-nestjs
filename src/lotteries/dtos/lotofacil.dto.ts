import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

/**
 * @author Jeyson Luiz Romualdo
 * @export
 * @class LotofacilDto
 */
export class LotofacilDto {
    @IsNotEmpty()
    @IsString()
    loteria: string;

    @IsNotEmpty()
    @IsNumber()
    numeroConcurso: number;

    @IsNotEmpty()
    @IsString()
    dataSorteio: string

    @IsNotEmpty()
    @IsNumber()
    bola1: number

    @IsNotEmpty()
    @IsNumber()
    bola2: number

    @IsNotEmpty()
    @IsNumber()
    bola3: number

    @IsNotEmpty()
    @IsNumber()
    bola4: number

    @IsNotEmpty()
    @IsNumber()
    bola5: number

    @IsNotEmpty()
    @IsNumber()
    bola6: number

    @IsNotEmpty()
    @IsNumber()
    bola7: number

    @IsNotEmpty()
    @IsNumber()
    bola8: number

    @IsNotEmpty()
    @IsNumber()
    bola9: number

    @IsNotEmpty()
    @IsNumber()
    bola10: number

    @IsNotEmpty()
    @IsNumber()
    bola11: number

    @IsNotEmpty()
    @IsNumber()
    bola12: number

    @IsNotEmpty()
    @IsNumber()
    bola13: number

    @IsNotEmpty()
    @IsNumber()
    bola14: number

    @IsNotEmpty()
    @IsNumber()
    bola15: number
}
