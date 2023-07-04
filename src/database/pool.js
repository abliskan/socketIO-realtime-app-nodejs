import { Pool } from 'pg';

module.exports = new Pool ({
    connectionString:process.env.DATABASE_URL,
})