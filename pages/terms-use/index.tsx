import React from 'react';
import Head from 'next/head'
import Navbar from "@/app/component/Navbar";
import Image from "next/image";
import TextPrivacy from "@/app/privacyPolicyText";
import SectionItem from "@/app/component/sectionItems";

const privacy = () => {
    return (
        <>
            <div className={"text-white "}>
                <Head>
                    <title>Mia | Terms of Use</title>
                </Head>
                <div className=" text-white  hidden md:block">
                    <div className="grid grid-cols-2 relative">
                        <div className={"h-screen sticky top-0 text-white  lg:pl-[7.25rem]   hidden md:block"}>
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
                <div className="md:hidden flex">
                    <div className={"text-white "}>
                        <section className={"pt-[5rem]"}>
                            <div>
                                <Image
                                    src="/image/Mia.png"
                                    width={212}
                                    height={100}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="w-[332px] pt-[1.5rem]">
                                <p className={"text-[40px] font-bold leading-[99.02%]"}>
                                    Is there somethings to explore in AI WORLD?<br/>
                                    Get Started
                                </p>
                            </div>
                        </section>
                        <section className="relative ">
                            <TextPrivacy/>
                        </section>
                        <section className="py-[4.8rem] flex items-center space-x-4 ">
                            <div>
                                <a  href="https://play.google.com/store/apps/details?id=com.mia.app" rel="noreferrer">
                                    <Image
                                        src="/image/google.png"
                                        width={200}
                                        height={47}
                                        alt="Picture of the author"
                                    />
                                </a>

                            </div>
                            <div>
                                <a  href="https://apps.apple.com/us/app/id1668359797">
                                    <Image
                                        src="/image/appStore.png"
                                        width={200}
                                        height={47}
                                        alt="Picture of the author"
                                    />
                                </a>

                            </div>
                        </section>


                    </div>
                </div>
            </div>
        </>
    );
};

export default privacy;
