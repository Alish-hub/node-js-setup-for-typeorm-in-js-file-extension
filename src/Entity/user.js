import { EntitySchema } from "typeorm";
import User from "../models/user.model.js";

// class User {
//     constructor (id,firstName,lastName,email,password){
//         this.id=id,
//         this.firstName= firstName,
//         this.lastName= lastName,
//         this.email= email,
//         this.password= password

//     }
// }

const userSchema = new EntitySchema({
  name: "User",
  target: User,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
      generatedType: "STORED",
      nullable: false,
    },
    firstName: {
      type: "varchar",
    },
    lastName: {
      type: "varchar",
    },
    email: {
      type: "varchar",
    },
    password: {
      type: "varchar",
    },
  },
});
export default userSchema;
// export default User;

// module.exports = {
//     User:User,
//     userSchema:userSchema
//   };
