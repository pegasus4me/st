// fetch les articles crées et les retourner ici => / dynamic route pour afficher l'article
'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
const Blog  = () => {

    const router = useRouter();
    const changePage = () => router.push('/blog')

    return (
        <div className="p-3 mt-8">
            <div>
                <hr className="max-w-[150px] opacity-20 border-dotted mb-2"/>
                <h2 className="text-white font-normal text-xl mb-4">Bl<span className="font-light text-[#888888] cursor-pointer" onClick={changePage}>og</span></h2>
                <div className="border border-dashed min-h-[200px] rounded-md border-[#232323] flex items-center justify-center shadow-[#888888]">
                        <p className="text-center text-[#888888] mt-11">no post yet</p>
                </div>
            </div>
        </div>
    )
}

export default Blog