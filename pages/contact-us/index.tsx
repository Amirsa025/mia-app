import React from 'react';
import Navbar from "@/app/component/Navbar";
import Image from "next/image";
import Head from 'next/head'
import ContactMobile from "@/app/component/Mobile/contactMobile";
import SectionItem from "@/app/component/sectionItems";
const Contact = () => {
    return (
        <div>
            <Head>
                <title>Mia | Contact us</title>
            </Head>
            <div className={"text-white relative"}>
                <div className={"absolute top-44 z-40 -left-[10rem]  hidden lg:flex"}>
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
                        <div className={"md:pt-[68px] text-white lg:pl-[7.25rem]  hidden md:block"}>
                            <div className="">
                                <Navbar/>
                            </div>
                            <div>
                                <div className={"text-white"}>
                                    <SectionItem/>
                                </div>
                            </div>
                        </div>
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
                                <div>
                                    <form action="mailto:youraddr@domain.tld" method="GET">
                                        <input type="submit" value="Send" className={"w-[330px] cursor-pointer h-[50px] rounded-[6px] bg-[#1DEC81] font-bold text-[#101010] text-[1rem]"} />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/*Moblie*/}
                <ContactMobile/>
            </div>
        </div>
    );
};

export default Contact;
