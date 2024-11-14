import Link from "next/link"


const BlogPage = () => {

    return (
        <div className="mt-4">
            <Link href='/' className="text-[#888888] underline underline-offset-4 hover:text-white">go back</Link>
            <h1 className="text-start text-white text-2xl p-2 mt-8">Blog</h1>
            <Link href="/blog/why">Why</Link>
        </div>
    )
}

export default BlogPage
