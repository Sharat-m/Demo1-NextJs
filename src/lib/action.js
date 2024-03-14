const addPost = async (formData) =>{
  "use server";

  const title =formData.get("title");
  const desc =formData.get("desc");
  const slug =formData.get("slug");
  const userId =formData.get("userId");

  console.log(title, desc, slug, userId);
}
export default addPost;