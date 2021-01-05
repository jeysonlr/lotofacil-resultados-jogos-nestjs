import { LotofacilDto } from '../dtos';
import { LotofacilEntity } from '../entities';
import { StringFormatterHelper } from 'src/shared/helper';
import { Repository, EntityRepository, EntityManager } from 'typeorm';

/**
 * @author Jeyson Luiz Romualdo
 * @export
 * @class LotofacilRepository
 * @extends {Repository<LotofacilEntity>}
 */
@EntityRepository(LotofacilEntity)
export class LotofacilRepository extends Repository<LotofacilEntity> {
    constructor(
        private readonly stringFormatter: StringFormatterHelper,
        private entityManager: EntityManager
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

    /**
     * @param {string} query
     * @return {*}  {Promise<any>}
     * @memberof LotofacilRepository
     */
    async findGames(query: string): Promise<any> {
        return await this.entityManager.connection.query(query);
    }
}
