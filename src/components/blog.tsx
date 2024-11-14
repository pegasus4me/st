// fetch les articles crées et les retourner ici => / dynamic route pour afficher l'article
'use client'
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useEffect, useState } from "react"
const Blog  = () => {

    const router = useRouter();
    const changePage = () => router.push('/blog')

    return (
        <div className="p-3 mt-8">
            <div>
                <hr className="max-w-[150px] opacity-20 border-dotted mb-2 "/>
                <h2 className="text-white font-normal text-xl mb-4">Bl<span className="font-light text-[#888888] cursor-pointer" onClick={changePage}>og</span></h2>
                <div className="border border-dashed min-h-[200px] rounded-md border-white/20 p-3 shadow-[#888888]">
                <div className="p-3 rounded-md bg-white/20 hover:bg-orange-400 transition">
                <Link href='/blog/why' className="text-white">the complexity syndrome</Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Blog