import { useParams } from "react-router"

import { useBlog } from "../hooks/getBlogData"
import BlogDetails from "../components/BlogDetails"
import AppBar from "../components/AppBar"
import Spinner from "../components/Spinner"

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