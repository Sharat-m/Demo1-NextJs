import addPost from "@/lib/action"



const ServerActionTestPage = () =>{
    return (
        <div>
            <form action={addPost}>
                <input type="text" placeholder="Blog Title" name="title" />
                <br /><br />
                <input type="text" placeholder="Blog Description" name="desc"/>
                <br /><br />
                <input type="text" placeholder="slug" name="slug"/>
                <br /><br />
                <input type="text" placeholder="Blog userId" name="userId"/>
                <br /><br />
                <input type="text" placeholder="Image Url" name="img" />
                <br />
                <br />
                <button>Create Blog</button>
            </form>
        </div>
    )
}
export default ServerActionTestPage