import { useEffect } from 'react'
import { useState } from 'react'

function Content() {
    const type = ["posts", "comments", "users"]
    const [post, setPost] = useState([])
   const [title, setTitle] = useState('')
   const [tab, setTab] = useState('posts')
   useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${tab}`)
        .then(res => res.json())
        .then(post => {
            setPost(post)
        })
   }, [tab])
   
    return (
        <div>
            {type.map(type => (
                <button key={type}
                    onClick={() => setTab(type)}
                    style = { type === tab ? {
                        backgroundColor : 'blue'
                    } : {}}
                > {type}</button>
            ))}
            <input 
                value={title}
                onChange = { e => setTitle(e.target.value)}
            />
            <ul>
                {
                    post.map(post => (
                        <li key={post.id}>{post.name}</li>
                    ))
                }

            </ul>
        </div>
    )
}

export default Content