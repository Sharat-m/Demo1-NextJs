import { Post } from "./models";
import { connectToDb } from "./utils";

const addPost = async (formData) =>{
  "use server";

  // const title =formData.get("title");
  // const desc =formData.get("desc");
  // const slug =formData.get("slug");
  // const userId =formData.get("userId");
  const { title, desc, slug, userId, img } = Object.fromEntries(formData);
  console.log(title, desc, slug, userId,img);
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
  } catch (error) {
    console.log(error);
    return {error : "Something went Wrong"};
  }
}
export default addPost;