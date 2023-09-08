import Line from  '../../public/Line.png';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";


const Footer = () => {
    return (
        <div className='border-t mt-32 opacity-40'>
            <div className='flex items-center justify-between'>
            <p className='text-[#CFCFCF] p-1 font-light'>safoan touil</p>
            <div className='flex gap-3'>
                <a href="https://www.linkedin.com/in/safoan-touil-0764ab1aa/"><FaLinkedinIn className="text-white"/></a>
                <a href="https://github.com/pegasus4me"><FaGithub className="text-white"/></a>
                <a href="https://twitter.com/TouilSafoan2"><FaXTwitter className="text-white"/></a>
                <a href="mailto:safoantouil@outlook.fr"><MdOutlineMail className="text-white"/></a>
            </div>
           
            </div>
        </div>
    )
}

export default Footer