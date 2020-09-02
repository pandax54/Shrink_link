
import { EntityRepository, Repository } from 'typeorm';
import Link from '../models/Links';


@EntityRepository(Link)
class LinksRepository extends Repository<Link> {
    public async findByShortUrl(shortCode: string): Promise<Link | null> {
        const findUrl = await this.findOne({
            where: { shortCode },
        });
        return findUrl || null;
    }
}

export default LinksRepository;