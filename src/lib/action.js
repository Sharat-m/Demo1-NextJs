"use server";
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (formData) => {
 

  // const title =formData.get("title");
  // const desc =formData.get("desc");
  // const slug =formData.get("slug");
  // const userId =formData.get("userId");
  const { title, desc, slug, userId, img } = Object.fromEntries(formData);
  console.log(title, desc, slug, userId, img);
  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
      img,
    });
    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog")
  } catch (error) {
    console.log(error);
    return { error: "Something went Wrong" };
  }
};

export const deletePost = async (formData) => {
  
  const { id } = Object.fromEntries(formData);
  console.log(id);
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    console.log("Deleted the Blog from DataBase");
    revalidatePath("/blog")
  } catch (error) {
    console.log(error);
    return { error: "Something went Wrong" };
  }
};
