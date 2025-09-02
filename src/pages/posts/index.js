import { useEffect, useState } from "react"
import * as request from '../../service/post'

function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await request.posts()
            console.log(response)
            setPosts(response)
        }
        fetchData()
    }, [])

    return (
        <div>
            {posts.map(it => (
                <div key={it.id}>{it.title}</div>
            ))}
        </div>
    )
}

export default Posts
