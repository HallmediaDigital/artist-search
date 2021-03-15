# savills-athena-assessement-fe-api

## Instructions

The project consists of two discrete projects: `api` and `frontend`. The task is to extend `api` to support the specced behaviour for `frontend`.

### API

- Add an endpoint to the `api` [artist controller](api/src/artist.controller.ts) for case-insensitive artist search. The search string should match any part of the artist name
- Extend `/artist/:id` endpoint to include the artist's albums

#### API Notes

`api` is a basic [NestJS](http://docs.nestjs.com/) application:

- it uses [dependency injection](https://docs.nestjs.com/providers#dependency-injection): classes are instantiated with their dependencies automatically
- it uses [decorators](https://www.typescriptlang.org/docs/handbook/decorators.html) to support automagic configuration, most relevant to this project:
    - [declaring route paths and params in controllers](api/src/artist.controller.ts) [(more info)](https://docs.nestjs.com/controllers)
    - [declaring database entities and relationships](api/src/artist.entity.ts)
- [integrates with TypeORM](https://docs.nestjs.com/techniques/database) for interfacing with the [embedded database]((api/chinook.db))
    - The database is [chinook](https://www.sqlitetutorial.net/sqlite-sample-database/)
    - entities are automatically loaded in the [TypeORM](https://typeorm.io) configuration in the [main app module](api/src/app.module.ts)

### Frontend

- flesh out the skeleton `ArtistSearch` component to use the artist search endpoint
- render the results for the artist search endpoint as a list of navigable artists
- navigating to an artist should display the artist name and a list of the artist's albums

#### Frontend Notes

`frontend` is a vanilla [create-react-app](https://create-react-app.dev/) skeleton.
 
- use [hooks](https://reactjs.org/docs/hooks-intro.html)
- styling is up to you

### Project Overall

- Provide the work with a full git history, either as an accessible repo somewhere or as an archive (zip will do)
- Use [implementation notes](implementation_notes.md) to jot down anything at all that might provide context where code comments have not been appropriate
- Use `npm run check-project` to check your work conforms to the project standards. This command will:
    - ensure formatting is consistent
    - ensure code is typechecked
    - ensure tests pass and prints coverage
    - lints `api`

## Setup

Run `npm install`. This will:

- install `api` dependencies
- install `frontend` dependencies
- install project wide dependencies

## Running

Run `npm start`. This will run both `api` and `frontend`.

The `frontend` dev server will [proxy requests](https://create-react-app.dev/docs/proxying-api-requests-in-development/) to the `api`.
