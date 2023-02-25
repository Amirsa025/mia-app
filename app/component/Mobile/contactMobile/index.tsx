import React from 'react';
import Image from "next/image";

const ContactMobile = () => {
    return (
        <>
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
                    <section className="relative py-12">
                        <div className={"md:pt-[68px]"}>
                            <div>
                                <h1 className=" text-[36px] font-extrabold">Contact US</h1>
                            </div>
                            <div className={"space-y-10"}>
                                <div className={"pt-[1.8rem]"}>
                                    <p>
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        Got a question or concern about our app? We're here to help! Please feel free <br/>
                                        to reach out to us using the contact form below, and a member of our team br will get
                                        back to you as soon as possible.

                                        {/* eslint-disable-next-line react/no-unescaped-entities */}

                                    </p>
                                    <p className={"pt-6"}>
                                        Whether you need technical support, want to report a bug, or have a suggestion
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        for how we can improve our app, we're always open to hearing from our users.
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        Your feedback is important to us, and we're committed to making sure that you
                                        have the best possible experience with our app.

                                        Thank you for choosing our app, and we look forward to hearing from you!
                                    </p>
                                </div>
                                <div className="flex items-center justify-center w-full">
                                    <button
                                        className={" w-[330px] h-[50px] rounded-[6px] bg-[#1DEC81] font-bold text-[#101010] text-[1rem]"}>Send
                                        Email
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-[1.8rem] flex items-center space-x-4 ">
                        <div>
                            <a   href="https://play.google.com/store/apps/details?id=com.mia.app" rel="noreferrer">
                                <Image
                                    src="/image/google.png"
                                    width={200}
                                    height={47}
                                    alt="Picture of the author"
                                />
                            </a>

                        </div>
                        <div>
                            <a href="https://apps.apple.com/us/app/id1668359797" >
                                <Image
                                    src="/image/appStore.png"
                                    width={200}
                                    height={47}
                                    alt="Picture of the author"
                                />
                            </a>

                        </div>
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
                        <h3 className="text-[10px] text-[#787878]">All right resaved for Mia-GPT 4 Community.
                            Copyright 2023</h3>
                    </section>
                </div>
            </div>
        </>
    );
};

export default ContactMobile;
