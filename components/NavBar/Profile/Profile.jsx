import React from "react";
import Image from "next/image";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";
import Link from "next/link";

//NOW INTERNAL IMPORTS
import Style from "./Profile.module.css";
import images from "../../../images";

const Profile = () => {
    return (
        <div className={Style.profile}>
            <div className={Style.profile_account}>
                <Image src={images.user1}
                    alt="user profile"
                    width={50}
                    height={50}
                    className={Style.profile_account_img}
                />
                <div className={Style.profile_account_info}>
                    <p>Sultan Gaddafi</p>
                    <small>X00023R45...</small>
                </div>
            </div>
            <div className={Style.profile_menu}>
                <div className={Style.profile_menu_one}>
                    <div className={Style.profile_menu_one_item}>
                        {/*Now displaying the icon*/}
                        <FaUserAlt />
                        <p>
                            <Link href={{ pathname: '/myprofile' }}>My Profile</Link>
                        </p>
                    </div>
                    <div className={Style.profile_menu_one_item}>
                        {/*Now displaying my items*/}
                        <FaRegImage />
                        <p>
                            <Link href={{ pathname: '/myitems' }}>My Items</Link>
                        </p>
                    </div>
                    <div className={Style.profile_menu_one_item}>
                        {/*Now displaying the edit profile*/}
                        <FaUserEdit />
                        <p>
                            <Link href={{ pathname: '/editprofile' }}>Edit Profile</Link>
                        </p>
                    </div>
                </div>

                {/*Adding a border between the menus*/}
                <div className={Style.profile_menu_two}>
                    <div className={Style.profile_menu_one_item}>
                        <MdHelpCenter />
                        <p>
                            <Link href={{ pathname: '/help' }}>Help</Link>
                        </p>
                    </div>
                    <div className={Style.profile_menu_one_item}>
                        <TbDownload />
                        <p>
                            <Link href={{ pathname: '/disconnect' }}>Disconnect</Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile;