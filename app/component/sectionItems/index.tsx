import React from 'react';
import Image from "next/image";

const SectionItem = () => {
    return (
        <div>
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
    );
};

export default SectionItem;
