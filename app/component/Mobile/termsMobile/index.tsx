import React from 'react';
import Image from "next/image";
import TextPrivacy from "@/app/component/privacyPolicyText";
import TermsText from "@/app/component/termsText";

const TermsMobile = () => {
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
                    <section className="relative ">
                       <TermsText/>
                    </section>
                    <section className="py-[4.8rem] flex items-center space-x-4 flex-col">
                        <div className={"flex items-center space-x-4"}>
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
                        </div>
                        <section className={"flex items-center space-x-1 pt-[70px] pb-20"}>
                            <div className={"w-6 h-6 rounded-full  text-black text-center font-medium"}>
                                <div className={"sr-only"}>copyright</div>
                                <Image
                                    src="/image/copyRight.png"
                                    width={20}
                                    height={20}
                                    alt="Picture of the author"
                                />
                            </div>
                            <h3 className="text-[12px]   text-[#787878]">All right reserved for Mia Application. Copyright 2023</h3>
                        </section>
                    </section>
                </div>
            </div>
        </>
    );
};

export default TermsMobile;
