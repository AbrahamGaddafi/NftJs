import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
//next we have to import the social media icons
import {
    TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter,
    TiSocialYouTube, TiSocialInstagram, TiArrowSortedDown, TiArrowSortedUp
} from "react-icons/ti";

//INTERNAL IMPORTS
import Style from "./SideBar.module.css";
import images from "../../../images";
import Button from "../../Button/Button";//since we need buttons in our side bar

//we''l receive props from navbar index so in our main function we'll set
const SideBar = ({ setOpenSideMenu }) => {
    //At first we need to display our various menus
    const [openDiscover, setopenDiscover] = useState(false);
    const [openHelp, setopenHelp] = useState(false);

    //now we take the discover array which will have the menu and the link
    const discover = [
        //in this array we'll have an object of every single menu
        {
            name: "Collection",
            link: "collection"
        },
        {
            name: "Search",
            link: "search"
        },
        {
            name: "Author Profile",
            link: "author-profile"
        },
        {
            name: "NFT Details",
            link: "NFT-details"
        },
        {
            name: "Account Setting",
            link: "account-setting"
        },
        {
            name: "Connect Wallet",
            link: "connect-wallet"
        },
        {
            name: "Blog",
            link: "blog"
        }
    ]
    //Then to our help center
    const helpCenter = [
        {
            name: "About",
            link: "about"
        },
        {
            name: "Contact Us",
            link: "contact-us"
        },
        {
            name: "Sign Up",
            link: "sign-up"
        },
        {
            name: "Sign In",
            link: "sign-in"
        },
        {
            name: "Subscription",
            link: "subscription"
        }

    ]

    //our open discover menu function
    const openDiscoverMenu = () => {
        if (!openDiscover) {
            setopenDiscover(true);
        }
        else {
            setopenDiscover(false);
        }
    }

    //our open help menu function
    const openHelpMenu = () => {
        if (!openHelp) {
            setopenHelp(true);
        }
        else {
            setopenHelp(false);
        }
    }

    //our close side bar function where we'll call the props we're receiving in our side bar
    const closeSideBar = () => {
        setOpenSideMenu(false);
    }

    return (
        <div className={Style.sidebar}>
            <GrClose className={Style.sidebar_closeBtn}
                onClick={() => closeSideBar()}
            />
            <div className={Style.sidebar_box} >
                {/*we'll take the image and we'll have to display the logo here*/}
                <Image src={images.logo} alt="logo" width={150} height={150} />
                <p>Discover the most outstanding articles on all the topics of NFT's own stories and share them</p>
                {/*next below we'll display all the social media icons */}
                <div className={Style.sidebar_social}>
                    <a href='#'>
                        <TiSocialFacebook />
                    </a>
                    <a href='#'>
                        <TiSocialLinkedin />
                    </a>
                    <a href='#'>
                        <TiSocialTwitter />
                    </a>
                    <a href='#'>
                        <TiSocialYouTube />
                    </a>
                    <a href='#'>
                        <TiSocialInstagram />
                    </a>
                </div>
            </div>
            <div className={Style.sideBar_menu}>
                <div>
                    <div className={Style.sideBar_menu_box}
                        onClick={() => openDiscoverMenu()}
                    >
                        <p>Discover</p>
                        <TiArrowSortedDown />
                    </div>
                    {/*we'll then take a dynamic block and say if open discover then we wanna render this component*/}
                    {
                        openDiscover && (
                            <div className={Style.SideBar_discover}>
                                {discover.map((el, i) => (
                                    <p key={i + 1}>
                                        <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                                    </p>
                                ))}
                            </div>
                        )}
                </div>
                <div>
                    <div className={Style.sideBar_menu_box}
                        onClick={() => openHelpMenu()}>
                        <p>Help Center</p>
                        <TiArrowSortedDown />
                        {/*we'll as well need to render the help component menu*/}
                    </div>
                    {
                        openHelp && (
                            <div className={Style.sideBar_discover}>
                                {helpCenter.map((el, i) => (
                                    <p key={i + 1}>
                                        <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                                    </p>
                                ))}
                            </div>
                        )}

                </div>
            </div>

            {/*we'll create two buttons one for connecting wallets and one for connecting nft*/}
            <div className={Style.sideBar - button}>
                <Button btnName="Create" />
                <Button btnName="Connect Wallet" />
            </div>

        </div>
    )

};

export default SideBar;