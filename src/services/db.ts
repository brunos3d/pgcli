import { Knex, knex } from "knex";

export let dbClient: Knex;

export const dbClientFactory = (config: Knex.Config) =>
  (dbClient = knex(config));
