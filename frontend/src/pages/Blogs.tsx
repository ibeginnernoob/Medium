
import { useBlogs } from '../hooks/getBlogs.tsx'

import BlogCard from '../components/BlogCard.tsx'
import AppBar from '../components/AppBar'
import Spinner from '../components/Spinner.tsx'

function Blogs(){
    const {loading,posts}=useBlogs()

    if(loading){
        return(
            <div>
                <Spinner/>
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