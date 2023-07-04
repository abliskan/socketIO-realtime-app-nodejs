import { Pool } from '../database/pool.js';

class Interface {
    static getAllUsers = async () => {
        let sql = `SELECT * FROM users;`;
        let allUsers = await Pool.query(sql);
        return allUsers.rows;
    };

    static getAllComments = async () => {
        let sql = `SELECT * FROM carComments;`;
        let allComents = await Pool.query(sql);
        return allComents;
    }
}