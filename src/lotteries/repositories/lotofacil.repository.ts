import { LotofacilDto } from '../dtos';
import { LotofacilEntity } from '../entities';
import { Repository, EntityRepository } from 'typeorm';
import { StringFormatterHelper } from 'src/shared/helper';
/**
 * @author Jeyson Luiz Romualdo
 * @export
 * @class LotofacilRepository
 * @extends {Repository<LotofacilEntity>}
 */
@EntityRepository(LotofacilEntity)
export class LotofacilRepository extends Repository<LotofacilEntity> {
    constructor(
        private readonly stringFormatter: StringFormatterHelper
    ) { super() }

    /**
     * @param {LotofacilDto} lotofacilDto
     * @return {*}  {Promise<LotofacilEntity>}
     * @memberof LotofacilRepository
     */
    async createLotofacil(lotofacilDto: LotofacilDto): Promise<LotofacilEntity> {
        try {
            return await this.save(lotofacilDto);
        } catch (error) {
            console.log(error)
        }
    }
}
