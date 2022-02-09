import { ConnectionOptions } from "typeorm";

export default {
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [
    `./${process.env.BUILD ? "bin" : "src"}/entity/*.${
      process.env.BUILD ? "js" : "ts"
    }`,
  ],
  cli: {
    entitiesDir: `./${process.env.BUILD ? "bib" : "src"}/entity`,
  },
} as ConnectionOptions;
