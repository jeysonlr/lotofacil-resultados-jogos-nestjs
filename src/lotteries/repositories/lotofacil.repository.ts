import { LotofacilDto } from '../dtos';
import { LotofacilEntity } from '../entities';
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
        private entityManager: EntityManager
    ) { super() }

    /**
     * @param {LotofacilDto} lotofacilDto
     * @return {*}  {Promise<LotofacilEntity>}
     * @memberof LotofacilRepository
     */
    async createLotofacil(lotofacilDto: LotofacilDto): Promise<LotofacilEntity> {
        return await this.save(lotofacilDto);
    }

    /**
     * @param {string} query
     * @return {*}  {Promise<any>}
     * @memberof LotofacilRepository
     */
    async findGames(query: string): Promise<any> {
        return await this.entityManager.connection.query(query);
    }

    /**
     * @return {*}  {Promise<LotofacilEntity[]>}
     * @memberof LotofacilRepository
     */
    async findAll():Promise<LotofacilEntity[] | null> {
        return await this.find();
    }
}
