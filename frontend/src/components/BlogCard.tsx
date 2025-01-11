
import NoImageBlogCard from './NoImageBlogCard'
import ImageBlogCard from './ImageBlogCard'

type props={
    authorName:string,
    publishDate:string,
    title:string,
    description:string,
    id:string,
    imageKey:string,
    saved:boolean
}

function BlogCard({authorName,publishDate,title,description,id,imageKey,saved}:props){

    if(imageKey==='NA'){
        return(
            <NoImageBlogCard
            authorName={authorName}
            publishDate={publishDate}
            title={title}
            description={description}
            id={id}
            saved={saved}
            />
        )
    }
    else{

        return(
            <ImageBlogCard
            authorName={authorName}
            publishDate={publishDate}
            title={title}
            description={description}
            id={id}
            imageKey={imageKey}
            saved={saved}
            />
        )
    }
}

export default BlogCard