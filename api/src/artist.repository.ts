import { EntityRepository, Repository } from "typeorm";
import { Artist } from "./artist.entity";

@EntityRepository(Artist)
export class ArtistRepository extends Repository<Artist> {
  public async getArtistProfileById(id: number): Promise<Artist | undefined> {
    return await this.createQueryBuilder("artist")
      .leftJoinAndSelect("artist.albums", "album")
      .where("artist.artistId = :id", { id: id })
      .getOne();
  }
  public async findBySearchTerm(searchTerm: string): Promise<Artist[]> {
    return await this.createQueryBuilder("artist")
      .where("name LIKE :name", { name: `%${searchTerm}%` })
      .getMany();
  }
}
