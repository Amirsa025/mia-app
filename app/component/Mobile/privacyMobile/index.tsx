import React from 'react';
import Image from "next/image";
import TextPrivacy from "@/app/privacyPolicyText";

const PrivacyMobile = () => {
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
        </>
    );
};

export default PrivacyMobile;
