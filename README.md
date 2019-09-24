Default Nest.js repository:
npm i -g @nestjs/cli

Creating a new project:
nest new endless

Creating a new module:
nest g module tasks

Creating a new controller:
nest g controller tasks --no-spec

Creating a new service:
nest g service tasks --no-spec

Lint: 
npm run lint

Format:
npm run format

Validation decorators:
https://github.com/typestack/class-validator#validation-decorators

Local postgres:
docker run --name task-postgres -p 5454:5432 -e POSTGRES_PASSWORD=postgres -d postgres
