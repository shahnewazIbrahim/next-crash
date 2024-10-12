import getAllPosts from "@/lib/getAllPosts"
import Link from "next/link"
export default async function Posts() {
    const posts = await getAllPosts()
    
    return (
        <div className="mt-6">
            <h1>All Posts</h1>

            <ul className="mt-6">
                {posts.map(post => (
                    <li className="mt-2.5" key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                        {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}