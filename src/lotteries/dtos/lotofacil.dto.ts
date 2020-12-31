import { IsNotEmpty } from 'class-validator';
import { Column } from 'typeorm';

/**
 * @author Jeyson Luiz Romualdo
 * @export
 * @class LotofacilDto
 */
export class LotofacilDto {
    @IsNotEmpty()
    @Column('varchar')
    loteria: string;

    @IsNotEmpty()
    @Column('integer')
    numeroConcurso: number;

    @IsNotEmpty()
    @Column('varchar')
    dataSorteio: string

    @IsNotEmpty()
    @Column('integer')
    bola1: number

    @IsNotEmpty()
    @Column('integer')
    bola2: number

    @IsNotEmpty()
    @Column('integer')
    bola3: number

    @IsNotEmpty()
    @Column('integer')
    bola4: number

    @IsNotEmpty()
    @Column('integer')
    bola5: number

    @IsNotEmpty()
    @Column('integer')
    bola6: number

    @IsNotEmpty()
    @Column('integer')
    bola7: number

    @IsNotEmpty()
    @Column('integer')
    bola8: number

    @IsNotEmpty()
    @Column('integer')
    bola9: number

    @IsNotEmpty()
    @Column('integer')
    bola10: number

    @IsNotEmpty()
    @Column('integer')
    bola11: number

    @IsNotEmpty()
    @Column('integer')
    bola12: number

    @IsNotEmpty()
    @Column('integer')
    bola13: number

    @IsNotEmpty()
    @Column('integer')
    bola14: number

    @IsNotEmpty()
    @Column('integer')
    bola15: number
}
