import React from "react";
import { Artist } from "../../models/artist";

export const ArtistProfile = (props: { artist: Artist }) => {
  return (
    <div className=" pl-4">
      <h1 className="text-2xl font-normal leading-normal mt-0 mb-2 ">
        {props.artist.name}
      </h1>

      {props.artist.albums && (
        <div>
          <h3 className="mt-0">Albums:</h3>

          <ul className="list-reset">
            {props.artist.albums.map((album) => (
              <li key={album.id}>{album.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
