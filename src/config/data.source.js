import { DataSource, DriverOptionNotSetError, EntitySchema } from "typeorm";
// import { EntitySchema } from "typeorm";
import userSchema from "../Entity/user.js";

export const appDataSource = new DataSource({
  type: "postgres",
  host:process.env.HOST,
  port:process.env.DB_PORT,
  username:process.env.USER,
  password:process.env.PASSWORD,
  database:process.env.DATABASE,
  synchronize: true,
  logging: false,
  entities: [
    // 'src/Entity/user.js'
    userSchema,
    // new EntitySchema(userSchema)
    // new EntitySchema(require("./entity/category.json")),
  ],
  migration: true,
  // subscribers: [],
});
 
