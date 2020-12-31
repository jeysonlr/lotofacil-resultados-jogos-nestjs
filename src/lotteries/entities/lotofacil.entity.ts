import { IsNotEmpty } from "class-validator";
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

/**
 * @author Jeyson Luiz Romualdo
 * @export
 * @class LotofacilEntity
 */
@Entity({ name: 'lotofacil', schema: 'public' })
export class LotofacilEntity {
    @PrimaryGeneratedColumn({ name: 'loteriaId', type: 'integer' })
    loteriaId: number;

    @IsNotEmpty()
    @Column('varchar')
    loteria: string;

    @IsNotEmpty()
    @Column('integer')
    numeroConcurso: number;

    @IsNotEmpty()
    @Column('varchar')
    dataSorteio: string

    @Column('integer')
    bola1: number

    @Column('integer')
    bola2: number

    @Column('integer')
    bola3: number

    @Column('integer')
    bola4: number

    @Column('integer')
    bola5: number

    @Column('integer')
    bola6: number

    @Column('integer')
    bola7: number

    @Column('integer')
    bola8: number

    @Column('integer')
    bola9: number

    @Column('integer')
    bola10: number

    @Column('integer')
    bola11: number

    @Column('integer')
    bola12: number

    @Column('integer')
    bola13: number

    @Column('integer')
    bola14: number

    @Column('integer')
    bola15: number

    @CreateDateColumn({ type: 'timestamp' })
    createAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updateAt: Date;
}
