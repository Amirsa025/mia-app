import React from 'react';
import {data} from "@/app/constant/data";
import Link from "next/link";
import {useRouter} from "next/router";

const Navbar:React.FC = () => {
    const router = useRouter();
    return (
        <>
            <div className = "  hidden md:block">
                <div className={"text-white "} >
                    <nav>
                        <ul className={"flex items-center space-x-16 text-white "}>
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
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;
