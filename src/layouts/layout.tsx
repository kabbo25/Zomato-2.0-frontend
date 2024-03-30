import React from "react";
import Header from "@/components/Header.tsx";
import Hero from "@/components/Hero.tsx";
import Footer from "@/components/Footer.tsx";

type Props = {
    children: React.ReactNode;
    showHero?: boolean;
    showForm?: boolean;
};

const Layout = ({children, showHero,showForm}: Props) => {
    return (
        <div className={"flex flex-col min-h-screen"}>
            <Header/>
            {showHero && <Hero/>}
            {
                showHero || showForm ?
                    (
                        <div
                            style={{
                                backgroundImage: 'linear-gradient(rgb(253, 255, 255) 4.17%, rgb(201, 188, 244) 100%)'
                            }}
                        >
                            <div className="container mx-auto py-10">
                                {children}
                            </div>
                        </div>
                    ) :
                    (
                        <div className="flex-1 flex items-center">
                            {children}
                        </div>
                    )
            }
            <Footer/>
        </div>
    );
};

export default Layout;
