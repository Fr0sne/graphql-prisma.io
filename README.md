<h2>Express + PrismaIO + GraphQL</h2>
<h4>Usage:</h4>

First run:
```sh
docker-compose up -d
```

Install dependencies
```sh
npm install
```
Generate types for prisma
```sh
npx prisma generate
```

Sync prisma schema with postgres database
```sh
npx prisma migrate dev 
```