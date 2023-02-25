import React from 'react';
import Head from 'next/head'
import Navbar from "@/app/component/Navbar";
import Image from "next/image";
import TextPrivacy from "@/app/privacyPolicyText";

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
                            <div className={"absolute top-44 z-40 -left-[10rem]  hidden md:flex"}>
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
                                <section className={"pt-[5rem] md:px-24 lg:px-0"}>
                                    <div>
                                        <Image
                                            src="/image/Mia.png"
                                            width={262}
                                            height={123}
                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <div className="w-[332px] py-[30px]">
                                        <p className={"text-[40px] font-custom leading-[99.02%]"}>
                                            Is there somethings to explore in AI WORLD?<br/>
                                            Get Started
                                        </p>
                                    </div>
                                </section>
                                <section className="pt-[1.188rem] flex items-center space-x-8 ">
                                    <div>
                                        <a href="https://play.google.com/store/apps/details?id=com.mia.app">
                                            <Image
                                                priority
                                                src="/image/google.png"
                                                width={189.53}
                                                height={56.29}
                                                alt="google"
                                            />
                                        </a>

                                    </div>
                                    <div>
                                        <a href="https://apps.apple.com/us/app/id1668359797">
                                            <Image
                                                priority
                                                src="/image/appStore.png"
                                                width={189.53}
                                                height={56.29}
                                                alt="appStore"
                                            />
                                        </a>

                                    </div>
                                </section>
                                <section className={"flex items-center space-x-1 py-[3.188rem]"}>
                                    <div className={"w-6 h-6 rounded-full  text-black text-center font-medium"}>
                                        <div className={"sr-only"}>copyright</div>
                                        <Image
                                            priority
                                            src="/image/copyRight.png"
                                            width={20}
                                            height={20}
                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <h3 className="text-[12px] text-[#787878]">All right resaved for Mia-GPT 4
                                        Community. Copyright 2023</h3>
                                </section>
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
