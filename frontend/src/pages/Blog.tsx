import { useParams } from "react-router"

import { useBlog } from "../hooks/getBlogData"
import BlogDetails from "../components/BlogDetails"

function Blog(){
    const {id}=useParams()

    const {loading,blogData}=useBlog(id || "")

    if(loading){
        return(
            <div>
                loading...
            </div>
        )
    }

    return(
        <div>
            <BlogDetails
                title={blogData.title}
                description={blogData.content}
                publishDate={blogData.publishDate}
                authorName={blogData.author.name}
            />
        </div>
    )
}

export default Blog