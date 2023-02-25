import Navbar from "@/app/component/Navbar";
import Image from "next/image";
import Head from 'next/head'
const Contact = () => {
    return (
        <div>
            <Head>
                <title>Mia | Contact us</title>
            </Head>
            <div className={"text-white relative"}>
                <div className={"absolute top-44 z-40 -left-[10rem]  hidden md:flex"}>
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
                        <div className={"md:pt-[68px] text-white lg:px-[9.25rem] hidden md:block"}>
                            <div className="">
                                <Navbar/>
                            </div>
                            <div>
                                <div className={"text-white "}>
                                    <section className={"pt-[5rem]"}>
                                        <div>
                                            <Image
                                                src="/image/Mia.png"
                                                width={262}
                                                height={123}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                        <div className="w-[332px] py-[30px] ">
                                            <p className={"text-[40px] font-custom leading-[99.02%]"}>
                                                Is there somethings to explore in AI WORLD?<br/>
                                                Get Started .
                                            </p>
                                        </div>
                                    </section>
                                    <section className="pt-[1.188rem] flex items-center space-x-8 ">
                                        <div>
                                            <a  href="https://play.google.com/store/apps/details?id=com.mia.app">
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
                                            <a  href="https://apps.apple.com/us/app/id1668359797">
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
                                    <button
                                        className={"w-[330px] h-[50px] rounded-[6px] bg-[#1DEC81] font-bold text-[#101010] text-[1rem]"}>Send
                                        Email
                                    </button>
                                </div>
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
                        <section className="relative py-12">
                            <div className={"md:pt-[68px]"}>
                                <div>
                                    <h1 className=" text-[36px] font-extrabold">Contact US</h1>
                                    <span className="text-[#858585] text-[12px]">Last Update : Feb 23, 2023</span>
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
            </div>
        </div>
    );
};

export default Contact;
