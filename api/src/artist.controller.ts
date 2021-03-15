import { Controller, Get, Param } from "@nestjs/common";
import { GetArtistDto, GetArtistSearchDto } from "./artist.controller.dto";
import { Artist } from "./artist.entity";
import { ArtistService } from "./artist.service";

@Controller()
export class ArtistController {
  constructor(private artistService: ArtistService) {}

  @Get("artist/:id")
  async getArtist(@Param() { id }: GetArtistDto): Promise<Artist | undefined> {
    return this.artistService.getArtistProfileById(id);
  }

  @Get("artist/search/:searchTerm")
  async searchArtist(
    @Param() { searchTerm }: GetArtistSearchDto
  ): Promise<Array<Artist> | undefined> {
    return this.artistService.findBySearchTerm(searchTerm);
  }
}
