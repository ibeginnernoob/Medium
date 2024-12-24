import { useParams } from "react-router"

import { useBlog } from "../hooks/getBlogData.tsx"
import BlogDetails from "../components/BlogDetails.tsx"
import AppBar from "../components/AppBar.tsx"
import Spinner from "../components/Spinner.tsx"

function Blog(){
    const {id}=useParams()

    const {loading,blogData}=useBlog(id || "")

    if(loading){
        return(
            <div>
                <Spinner/>
            </div>
        )
    }

    return(
        <>
            <AppBar/>
            <div>
                <BlogDetails
                    title={blogData.title}
                    description={blogData.content}
                    publishDate={blogData.publishDate}
                    authorName={blogData.author.name}
                />
            </div>
        </>
    )
}

export default Blog