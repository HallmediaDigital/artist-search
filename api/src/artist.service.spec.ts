import { Test, TestingModule } from "@nestjs/testing";
import { ArtistModule } from "./artist.module";
import { ArtistRepository } from "./artist.repository";
import { ArtistService } from "./artist.service";

describe("ArtistService", () => {
  let service: ArtistService;
  const repo: Partial<jest.Mocked<ArtistRepository>> = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ArtistModule],
    })
      .overrideProvider(ArtistRepository)
      .useValue(repo)
      .compile();

    service = module.get(ArtistService);
  });

  it("getArtistProfileById delegates to ArtistRepository#getArtistProfileById", async () => {
    repo.getArtistProfileById = jest.fn().mockImplementation((id: number) =>
      Promise.resolve({
        id,
        name: "Foo",
        albums: [],
      })
    );

    const result = await service.getArtistProfileById(99);

    expect(repo.getArtistProfileById).toBeCalledWith(99);

    expect(result).toEqual({
      id: 99,
      name: "Foo",
      albums: [],
    });
  });

  it("findBySearchTerm delegates to ArtistRepository#findBySearchTerm", async () => {
    repo.findBySearchTerm = jest.fn().mockImplementation((searchTerm: string) =>
      Promise.resolve({
        id: 99,
        name: searchTerm,
        albums: [],
      })
    );

    const result = await service.findBySearchTerm("Foo");

    expect(repo.findBySearchTerm).toBeCalledWith("Foo");

    expect(result).toEqual({
      id: 99,
      name: "Foo",
      albums: [],
    });
  });
});
