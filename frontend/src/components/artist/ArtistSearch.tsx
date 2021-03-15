import React, { useState } from "react";
import { ArtistProfile } from "./ArtistProfile";
import { ArtistSearchForm } from "./ArtistSearchForm";
import { ArtistSearchResults } from "./ArtistSearchResults";
import { Artist } from "../../models/artist";
import { apiRequest } from "../../services/api";

export function ArtistSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [artists, setArtists] = React.useState<Artist[]>();
  const [artist, setArtist] = React.useState<Artist | null>();

  const handleSearchTermChanges = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.currentTarget.value);
  };

  const handleSearchClick = async (
    event: React.FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    const artistSearchUrl = `/artist/search/${searchTerm}`;
    const artists = await apiRequest<Array<Artist>>(artistSearchUrl);
    setArtists(artists);
    setArtist(null);
  };

  const handleArtistChange = async (
    event: React.FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    const artistId = event.currentTarget.getAttribute(
      "data-artist-id"
    ) as string;

    const artistUrl = `/artist/${artistId}`;
    const artist = await apiRequest<Artist>(artistUrl);
    setArtists(artists);
    setArtist(artist);
  };

  return (
    <>
      <div className="flex mb-4 mt-4">
        <div className="w-full h-12">
          <ArtistSearchForm
            searchTerm={searchTerm}
            handleSearchTermChanges={handleSearchTermChanges}
            handleSearchClick={handleSearchClick}
          />
        </div>
      </div>

      <div className="flex mb-4">
        <div className="w-full lg:w-1/3">
          {artists && (
            <ArtistSearchResults
              artists={artists}
              selectArtist={handleArtistChange}
            />
          )}
        </div>
        <div className="w-full lg:w-2/3">
          {artist && <ArtistProfile artist={artist} />}
        </div>
      </div>
    </>
  );
}
