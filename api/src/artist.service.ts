import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Artist } from "./artist.entity";
import { ArtistRepository } from "./artist.repository";

@Injectable()
export class ArtistService {
  constructor(
    @InjectRepository(ArtistRepository) readonly repo: ArtistRepository
  ) {}

  async getArtistProfileById(id: number): Promise<Artist | undefined> {
    return await this.repo.getArtistProfileById(id);
  }

  async findBySearchTerm(
    searchTerm: string
  ): Promise<Array<Artist> | undefined> {
    return await this.repo.findBySearchTerm(searchTerm);
  }
}
