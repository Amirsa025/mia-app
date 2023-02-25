import React from 'react';
import Head from 'next/head'
import Navbar from "@/app/component/Navbar";
import Image from "next/image";
import TextPrivacy from "@/app/privacyPolicyText";
import SectionItem from "@/app/component/sectionItems";
import PrivacyMobile from "@/app/component/Mobile/privacyMobile";

const privacy = () => {
    return (
        <>
            <div className={"text-white "}>
                <Head>
                    <title>Mia | Terms of Use</title>
                </Head>
                <div className=" text-white  hidden md:block">
                    <div className="grid grid-cols-2 relative">
                        <div className={"h-screen sticky top-0 text-white  lg:pl-[9.25rem]   hidden md:block"}>
                            <div className={"absolute top-44 z-40 -left-[10rem]  hidden lg:flex"}>
                                <Image
                                    priority
                                    className="rotate_me"
                                    src="/image/Group39.png"
                                    width={254}
                                    height={335}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="md:pt-[68px] ">
                                <Navbar/>
                            </div>
                            <div className={"text-white"}>
                                <SectionItem/>
                            </div>
                        </div>

                        <div className={"py-[40px] "}>
                            <div className="">
                                <div>
                                    <h1 className=" text-[36px] font-extrabold">Privacy Policy</h1>
                                    <span
                                        className="text-[#858585] text-[12px] font-normal ">Last Update : Feb 23, 2023</span>

                                </div>
                                <TextPrivacy/>
                            </div>
                        </div>
                    </div>

                </div>
                  {/*Moblie*/}
                  <PrivacyMobile/>
            </div>
        </>
    );
};

export default privacy;
