"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

const registerUser = async (payload) => {
  try {
    const result = await dbConnect(collectionNames.USERS).insertOne(payload);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default registerUser;
