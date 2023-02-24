import React from 'react';
import Navbar from "@/app/component/Navbar";
import Image from "next/image";

const Contact = () => {
    return (
            <div>
                <div className={"text-white relative"}>
                        <div className={"absolute top-44 z-40 -left-[10rem] animate-pulse hidden md:flex"}>
                            <Image
                                className="rotate_me"
                                src="/image/Group39.png"
                                width={254}
                                height={335}
                                alt="Picture of the author"
                            />
                        </div>
                    {/*Desktop and tablet*/}
                    <div className=" text-white -z-[10000]  hidden md:block">
                        <div className="grid grid-cols-2 ">
                            <div className={"md:py-[2.25rem] text-white md:px-[9.25rem] hidden md:block"}>
                                <div className = "">
                                    <Navbar/>
                                </div>
                                <div className={"text-white"} >
                                    <section className={"pt-[5.95rem]"}>
                                        <div>
                                            <Image
                                                src="/image/Mia.png"
                                                width={262}
                                                height={123}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                        <div className="w-[332px] py-[14px]">
                                            <p className={"text-[40px] font-bold leading-[99.02%]"}>
                                                Is there somethings to explore in AI WORLD?<br/>
                                                Get Started
                                            </p>
                                        </div>
                                    </section>
                                    <section className="pt-[3.1rem] flex items-center space-x-8 ">
                                        <div>
                                            <a href="https://play.google.com/store/apps/details?id=com.mia.app">
                                                <Image
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
                                                    src="/image/appStore.png"
                                                    width={189.53}
                                                    height={56.29}
                                                    alt="appStore"
                                                />
                                            </a>

                                        </div>
                                    </section>
                                    <section className={"flex items-center space-x-1 py-[2.55rem]"}>
                                        <div className={"w-6 h-6 rounded-full  text-black text-center font-medium"}>
                                            <div className={"sr-only"}>copyright</div>
                                            <Image
                                                src="/image/copyRight.png"
                                                width={20}
                                                height={20}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                        <h3 className="text-[12px] text-[#787878]">All right resaved for Mia-GPT 4 Community. Copyright 2023</h3>
                                    </section>
                                </div>
                            </div>

                            <div className={"md:py-[2.25rem]"}>
                                    <div>
                                        <h3>Contact US</h3>
                                        <span className="text-[#858585] text-[12px]">Last Update : Feb 23, 2023</span>
                                    </div>
                                    <div className={"space-y-10"}>
                                        <div className={"pt-[1.8rem]"}>
                                            <p>Mia built the “Mia - Chat with GPT 4 AI” app as a free app.
                                                The Dopin Team provides this service at no cost and only with in-app advertisements, and it is intended to be used as is.
                                                <br/>
                                                This page is used to inform visitors regarding our policies regarding the collection, use, and disclosure of personal information if anyone decides to use our service.</p>
                                        </div>
                                        <div>
                                            <button className={"w-[330px] h-[50px] rounded-[6px] bg-[#1DEC81] font-bold text-[#101010] text-[1rem]"}>send Email</button>
                                        </div>
                                    </div>
                            </div>
                        </div>

                    </div>
                    {/*Moblie*/}
                    <div className="md:hidden flex">
                        <div className={"text-white "} >
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
                            <section className="py-[1.8rem] flex items-center space-x-4 ">
                                <div>
                                    <a href="https://play.google.com/store/apps/details?id=com.mia.app">
                                        <Image
                                            src="/image/google.png"
                                            width={200}
                                            height={47}
                                            alt="Picture of the author"
                                        />
                                    </a>

                                </div>
                                <div>
                                    <a href="https://apps.apple.com/us/app/id1668359797">
                                        <Image
                                            src="/image/appStore.png"
                                            width={200}
                                            height={47}
                                            alt="Picture of the author"
                                        />
                                    </a>

                                </div>
                            </section>
                            <section className="relative ">
                            </section>
                            <section className={"flex items-center space-x-1 py-[27px]"}>
                                <div className={"w-6 h-6 rounded-full  text-black text-center font-medium"}>
                                    <div className={"sr-only"}>copyright</div>
                                    <Image
                                        src="/image/copyRight.png"
                                        width={20}
                                        height={20}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <h3 className="text-[10px] text-[#787878]">All right resaved for Mia-GPT 4 Community. Copyright 2023</h3>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Contact;
