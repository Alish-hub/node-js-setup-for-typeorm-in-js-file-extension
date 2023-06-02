import { appDataSource } from "../config/data.source.js";
import { getRepository } from "typeorm";
import bcrypt from "bcrypt";
import User from "../models/user.model.js";

const userRepository = appDataSource.getRepository(User);
// console.log({user:userRepository});

export const register = async (req, res) => {
  try {
    // console.log("hererere");
    const { firstName, lastName, email, password } = req.body;
    // console.log(firstName,lastName,email,password)
    const user1 = await userRepository.findOne({
      where: {
        email: email,
      },
    });
    // console.log({ user1: user1 });
    if (user1) {
      return res.status(401).json({ message: "Email already exist" });
    }
    const hassedPassword = bcrypt.hashSync(password, 12);
    const user2 = new User();
    user2.firstName = firstName;
    user2.lastName = lastName;
    user2.email = email;
    user2.password = hassedPassword;

    // {
    //     firstName: firstName,
    //     lastname: lastName,
    //     email: email,
    //     password: password,
    //   }
    // console.log("user2", user2);
    await userRepository
      .insert(user2)
      .then((data) => {
        console.log("data", data);
        return res.status(201).json({ "sucessfully registered": user2, data });
      })
      .catch((e) => {
        console.log("e", e);
        return res.status(201).json(e);
      });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
