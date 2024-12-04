
import { useBlogs } from '../hooks/getBlogs.js'

import BlogCard from '../components/BlogCard.js'
import AppBar from '../components/AppBar'

function Blogs(){
    const {loading,posts}=useBlogs()

    if(loading){
        return(
            <div>
                ...loading
            </div>
        )
    }

    return(
        <>
            <AppBar />
            <div>
                {
                    posts.map((post)=>{
                        return(
                            <BlogCard
                                authorName={post.author.name}
                                title={post.title}
                                description={post.content}
                                publishDate={post.publishDate}
                                id={post.id}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Blogs