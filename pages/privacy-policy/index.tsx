import React from 'react';
import Navbar from "@/app/component/Navbar";
import Image from "next/image";

const privacy = () => {
    return (
        <>
            <div className={"text-white "}>

                <div className=" text-white  hidden md:block">
                    <div className="grid grid-cols-2 relative">
                        <div className={"h-screen sticky top-0 text-white md:px-4rem] lg:px-[9.25rem] hidden md:block"}>
                            <div className={"absolute top-44 z-40 -left-[10rem]  hidden md:flex"}>
                                <Image
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

                        <div className={"pt-[68px]"}>
                            <div className="">
                                <div>
                                    <h1 className=" text-[36px] font-extrabold">Privacy Policy</h1>
                                    <span
                                        className="text-[#858585] text-[12px] font-normal ">Last Update : Feb 23, 2023</span>

                                </div>
                                <div className="pt-[28px] font-[300] text-[1rem]">
                                    <p>Mia - Chat with GPT 4 AI<br/>
                                        Privacy Policy
                                    </p>
                                    <p className={"pt-4"}>
                                        Mia built the “Mia - Chat with GPT 4 AI” app as a free app. The Dopin Team
                                        provides this service at no cost and only with in-app advertisements, and it is
                                        intended to be used as is.
                                    </p>
                                    <p className={"pt-4"}>
                                        If you choose to use our service, then you agree to the collection and use of
                                        information in relation to this policy. The personal information that we collect
                                        is used for providing and improving the service. We will not use or share your
                                        information with anyone except as described in this privacy policy.
                                    </p>
                                    <p className={"pt-4"}>
                                        The terms used in this Privacy Policy have the same meanings as in our Terms and
                                        Conditions, which are accessible at “Chat with GPT 4 AI ” unless otherwise
                                        defined in this Privacy Policy.
                                    </p>
                                    <p className={"pt-4"}>
                                        Information Collection and Use
                                        For a better experience, while using our service, we may require you to provide
                                        us with certain personally identifiable information like personal data, full
                                        name, email address and pictures etc. The information that we request will be
                                        retained by us and used as described in this privacy policy. The app does use
                                        third-party services that may collect information used to identify you.
                                    </p>
                                    <p className={"pt-4"}>
                                        Service Providers <br/>
                                        We may employ third-party companies and individuals due to the following
                                    </p>

                                    <div>
                                        <span>reasons:</span>
                                        <ul className="pl-8 py-2">
                                            <li className="list-disc">To facilitate our Service;</li>
                                            <li className="list-disc">To provide the Service on our behalf;</li>
                                            <li className="list-disc">To perform Service-related services; or</li>
                                            <li className="list-disc">To assist us in analyzing how our service is
                                                used.
                                            </li>
                                        </ul>
                                        <span className="py-2">Link to the privacy policy of third-party service providers used by the app:</span>
                                        <ul className="pl-8  pb-2" >
                                            <li className="list-disc">Google Play Services</li>
                                            <li className="list-disc"> Google AdMob</li>
                                            <li className="list-disc"> Google Analytics for Firebase</li>
                                            <li className="list-disc">Firebase Crashlytics</li>
                                        </ul>
                                        <p className="pt-4">
                                            We want to inform users of this Service that these third parties have access
                                            to your Personal Information. The reason is to perform the tasks assigned to
                                            them on our behalf. However, they are obligated not to disclose or use the
                                            information for any other purpose.
                                        </p>
                                        <span>reasons:</span>
                                        <p>
                                            We value your trust in providing us with your personal information, So we
                                            are striving to use commercially acceptable means of protecting it. But
                                            remember that no method of transmission over the internet, or method of
                                            electronic storage is 100% secure and reliable, and we cannot guarantee its
                                            absolute security.
                                        </p>
                                        <span>Requesting Data Deletion</span>
                                        <p className={"pt-4"}>
                                            You have the right to request the deletion of your personal information that
                                            we have collected, subject to certain exceptions. To make a request for data
                                            deletion, please contact us using the information provided in the Contact Us
                                            section below. We will respond to your request within a reasonable
                                            timeframe, and may ask for additional information to verify your identity
                                            before proceeding with the deletion.
                                        </p>
                                        <div className={"pt-4"}>
                                            <span>Links to Other Sites</span>
                                            <p >
                                                This service may contain links to other sites. If you click on a third-party
                                                link, you will be directed to that site. Note that these external sites are
                                                not operated by us. Therefore, we strongly advise you to review the
                                                Privacy-Policy of these websites. We have no control over and assume no
                                                responsibility for the content, privacy policies, or practices of any
                                                third-party sites or services.
                                            </p>
                                        </div>
                                        <div className={"pt-4"}>
                                            <span>Ads</span>
                                            <p>
                                                We may display ads supplied by a third-party ad provider, such as Google AdMob, AdSense, Facebook Ads, etc. These providers may be using cookies, or other technologies to collect information as a result of ad serving.
                                                Important notes:
                                                This application is NOT affiliated with or endorsed by OpenAI.
                                            </p>
                                        </div>
                                    </div>

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
                            <div className="pt-[28px] font-[300] text-[1rem]">
                                <p>Mia - Chat with GPT 4 AI<br/>
                                    Privacy Policy
                                </p>
                                <p className={"pt-4"}>
                                    Mia built the “Mia - Chat with GPT 4 AI” app as a free app. The Dopin Team
                                    provides this service at no cost and only with in-app advertisements, and it is
                                    intended to be used as is.
                                </p>
                                <p className={"pt-4"}>
                                    If you choose to use our service, then you agree to the collection and use of
                                    information in relation to this policy. The personal information that we collect
                                    is used for providing and improving the service. We will not use or share your
                                    information with anyone except as described in this privacy policy.
                                </p>
                                <p className={"pt-4"}>
                                    The terms used in this Privacy Policy have the same meanings as in our Terms and
                                    Conditions, which are accessible at “Chat with GPT 4 AI ” unless otherwise
                                    defined in this Privacy Policy.
                                </p>
                                <p className={"pt-4"}>
                                    Information Collection and Use
                                    For a better experience, while using our service, we may require you to provide
                                    us with certain personally identifiable information like personal data, full
                                    name, email address and pictures etc. The information that we request will be
                                    retained by us and used as described in this privacy policy. The app does use
                                    third-party services that may collect information used to identify you.
                                </p>
                                <p className={"pt-4"}>
                                    Service Providers <br/>
                                    We may employ third-party companies and individuals due to the following
                                </p>

                                <div>
                                    <span>reasons:</span>
                                    <ul className="pl-8 py-2">
                                        <li className="list-disc">To facilitate our Service;</li>
                                        <li className="list-disc">To provide the Service on our behalf;</li>
                                        <li className="list-disc">To perform Service-related services; or</li>
                                        <li className="list-disc">To assist us in analyzing how our service is
                                            used.
                                        </li>
                                    </ul>
                                    <span className="py-2">Link to the privacy policy of third-party service providers used by the app:</span>
                                    <ul className="pl-8  pb-2" >
                                        <li className="list-disc">Google Play Services</li>
                                        <li className="list-disc"> Google AdMob</li>
                                        <li className="list-disc"> Google Analytics for Firebase</li>
                                        <li className="list-disc">Firebase Crashlytics</li>
                                    </ul>
                                    <p className="pt-4">
                                        We want to inform users of this Service that these third parties have access
                                        to your Personal Information. The reason is to perform the tasks assigned to
                                        them on our behalf. However, they are obligated not to disclose or use the
                                        information for any other purpose.
                                    </p>
                                    <span>reasons:</span>
                                    <p>
                                        We value your trust in providing us with your personal information, So we
                                        are striving to use commercially acceptable means of protecting it. But
                                        remember that no method of transmission over the internet, or method of
                                        electronic storage is 100% secure and reliable, and we cannot guarantee its
                                        absolute security.
                                    </p>
                                    <span>Requesting Data Deletion</span>
                                    <p className={"pt-4"}>
                                        You have the right to request the deletion of your personal information that
                                        we have collected, subject to certain exceptions. To make a request for data
                                        deletion, please contact us using the information provided in the Contact Us
                                        section below. We will respond to your request within a reasonable
                                        timeframe, and may ask for additional information to verify your identity
                                        before proceeding with the deletion.
                                    </p>
                                    <div className={"pt-4"}>
                                        <span>Links to Other Sites</span>
                                        <p >
                                            This service may contain links to other sites. If you click on a third-party
                                            link, you will be directed to that site. Note that these external sites are
                                            not operated by us. Therefore, we strongly advise you to review the
                                            Privacy-Policy of these websites. We have no control over and assume no
                                            responsibility for the content, privacy policies, or practices of any
                                            third-party sites or services.
                                        </p>
                                    </div>
                                    <div className={"pt-4"}>
                                        <span>Ads</span>
                                        <p>
                                            We may display ads supplied by a third-party ad provider, such as Google AdMob, AdSense, Facebook Ads, etc. These providers may be using cookies, or other technologies to collect information as a result of ad serving.
                                            Important notes:
                                            This application is NOT affiliated with or endorsed by OpenAI.
                                        </p>
                                    </div>
                                </div>

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
        </>
    );
};

export default privacy;
