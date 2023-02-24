import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import {data} from '../constant/data'
import Image from "next/image";
interface  Layout {
    children: React.ReactNode
}
const Layout:React.FC<Layout> = ({children}) => {
    const router = useRouter();
    return (
        <div className="bg-[#101010] min-h-screen px-8">
            {children}
            <footer className=" fixed
             inset-x-0
             bottom-0 bg-[#1e1e1e] px-8  block  py-[20px] md:hidden">
                <ul className={" flex items-center justify-between text-white "}>
                    {
                        data.map(item =>{
                            return(
                                <div key={item.id}>
                                    <li>
                                        <Link href={`${item.route}`} legacyBehavior>
                                            <a className={router.pathname == item.route ? "text-green-500" : ""}>
                                                {item.path}
                                            </a>
                                        </Link>
                                    </li>
                                </div>
                            )
                        })
                    }
                </ul>
            </footer>
        </div>
    );
};

export default Layout;
