### API

- Added "getArtistProfileById" to service and repository.
- "getArtistProfileById" repository includes "albums" relation.
- Added test for "getArtistProfileById" service and repository.
- Added "findArtistBySearch" to service and repository.
- Added test for "findArtistBySearch" service and repository.
- "findArtistBySearch" includes case-insensitive search. "Gold" and "gold" will return the same values.
- Test coverage is light. This could be improved.
- "getArtistProfileById" includes the "albums" array whereas "findArtistBySearch" does not include the "albums" array. This API inconsistancy feels awkward.
- Where possible I've used parameters to protect from SQL injection.

### Frontend

- Simple interface to query artists.
- The mobile view is incompleted.
- The UI could be improved by loading the artist profile in a modal or in it's own page.
- Test coverage is light. This could be improved.
- Some artits names are very long. We could consider truncating artist names.
