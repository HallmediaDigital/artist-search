import React from "react";
import { Artist } from "../../models/artist";

export const ArtistSearchResults = (props: {
  artists: Artist[];
  selectArtist: (event: React.FormEvent<HTMLButtonElement>) => {};
}) => {
  return (
    <div className="pl-4 pr-4 border-r-4">
      <ul className="list-reset">
        {props.artists.map((artist) => (
          <li key={artist.id}>
            <button
              title={artist.name}
              data-artist-id={artist.id}
              className="block p-1 "
              onClick={props.selectArtist}
            >
              {artist.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
