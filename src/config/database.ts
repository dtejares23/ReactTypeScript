import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv"
import { Note } from "../model/Note";
dotenv.config()

class Database {
    public sequelize:Sequelize | undefined

    private POSTGRES_DB = process.env.POSTGRES_DB as string;
    private POSTGRES_HOST = process.env.POSTGRES_HOST as string;
    private POSTGRES_PORT = process.env.POSTGRES_PORT as unknown as number;
    private POSTGRES_USER = process.env.POSTGRES_USER as string;
    private POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD as string;

    constructor(){
        this.connectToPostgreSQL();
    }

    private async connectToPostgreSQL() {
        this.sequelize = new Sequelize({
            database: this.POSTGRES_DB,
            username: this.POSTGRES_USER,
            password: this.POSTGRES_PASSWORD,
            host: this.POSTGRES_HOST,
            port: this.POSTGRES_PORT,
            dialect: "postgres",
            dialectOptions: {
                ssl: {
                  require: true, // Require SSL/TLS encryption
                //   rejectUnauthorized: false, // Ignore self-signed certificates (for development/testing purposes)
                },
            },
            models: [Note]
        });
        this.sequelize.authenticate().then(() =>{
            console.log("Ze belutooth is kownected sucksessfowley. PostgresSQL Connection has been establish successfully. ")
        })
        .catch((err=>{
            console.log("Unable to connect to the PostgreSQL database", "n/", err)
        }))
    }
}

export default Database