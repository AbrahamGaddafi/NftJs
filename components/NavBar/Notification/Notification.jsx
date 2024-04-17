import React from "react";
import Image from "next/image";

//INTERNAL IMPORTS
import Style from "./Notification.module.css";
import images from "../../../images";

const Notification = () => {
    return (

        <div className={Style.notification}>
            <p>Notification</p>
            <div className={Style.notification_box}>
                <div className={Style.notification_box_img}>
                    <Image
                        src={images.user1}
                        alt="profile image"
                        width={50}
                        height={50}
                        className = {Style.notification_box_img}
                    />
                </div>
                   <div className = {Style.notification_box_info}>
                    {/*Here we'll show info about the user like name and display address and time which will keep update in time of notification period*/}
                    <h4>Sultan Gaddafi</h4>
                    <p>Measure action your user...</p>
                    <small>3 minutes ago</small>
                   </div>
                   <span className = {Style.notification_box_new}></span>
            </div>
        </div>)

}

export default Notification; 