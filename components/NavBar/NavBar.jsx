//Here we'll import all the components
//React imports
import React, {useState, useEffect} from "react"; 
import Image from "next/image";
import Link from "next/link";

//now importing the icons
import {MdNotifications} from "react-icons/md";
import {BsSearch} from "react-icons/bs";
import {CgMenuLeft, CgMenuRight} from "react-icons/cg";

//internal imports
import Style from "./NavBar.module.css";
import {Discover, HelpCenter, Notification, Profile, SideBar} from './index';
import {Button} from '../componentindex';
import images from "../..img";

const NavBar = () => {
    //let's set our use states components
    const[discover, setDiscover] = useState(false);
    const[help, setHelp] = useState(false);
    const[notification, setNotification] = useState(false);
    const[profile, setProfile] = useState(false);
    const[openSideMenu, setOpenSideMenu] = useState(false);

//Writing the function for opening
const openMenu = (e) => {
    //in this e i want to access the button text.
    const btnText = e.target.innerText;
    if(btnText == "Discover"){
    //if that's the case we need to open discover but still keep the other components locked
    setDiscover(true);
    setHelp(false);
    setNotification(false);
    setProfile(false);
    setOpenSideMenu(false);
    }
    //we do same for other components
    else if("Help Center"){
    setDiscover(false);
    setHelp(true);
    setNotification(false);
    setProfile(false);
    setOpenSideMenu(false);

    }
    else{
    setDiscover(false);
    setHelp(false);
    setNotification(false);
    setProfile(false);
    setOpenSideMenu(false);
    }
}

//our open notification function
const openNotification = ()=> {
   if(!notification){
    //if notification component is false then we set notification to true
    setNotification(true);
    setDiscover(false);
    setHelp(false);
    setProfile(false);
    setOpenSideMenu(false);
   }
   else{
        setNotification(false);
   }
}

//our open profile function
 const openProfile = ()=>{
    if(!profile){
        setProfile(true);
        setNotification(false);
        setDiscover(false);
        setHelp(false);
        setOpenSideMenu(false);
    }
    else{
        setProfile(false);
    }
 }
   
//our open side bar function
 const openSideBar = ()=>{
    if(!openSideMenu){
        setOpenSideMenu(true);
        setProfile(false);
        setNotification(false);
        setDiscover(false);
        setHelp(false);
    }
    else{
        setOpenSideMenu(false);
    }

 } 
    return(
        //this is how we're gonna write our jsx
        <div className = {Style.navbar}>
            <div className = {Style.navbar_container}>
                <div className = {Style.navbar_container_left}>
                   <div className = {Style.logo}>
                      <Image src = {images.logo} alt = "NFT MARKETPLACE" width = {100} height = {100}/>
                   </div>
                   <div className = {Style.navbar_container_left_box_input}> 
                       <div className = {Style.navbar_container_left_box_input_box}>
                          <input type= 'text' placeholder = "Search NFT"/>
                          <BsSearch onClick = {() => {}} className = {Style.search_icon}/>
                        </div> 
                   </div> 
                </div>
               
            {/* End of the left section,Start of the right section*/}
                      
                <div className= {Style.navbar_container_right}>
                    <div className={Style.navbar_container_right_discover}>
            {/*DISCOVER MENU*/}
                        <p onClick= {(e) => openMenu(e)} >Discover</p>
            {/*Here we'll take a dynamic block,if discover is false we hide it*/}
                        {discover &&(
                              <div className = {Style.navbar_container_right_discover_box}>
                              <Discover/>  
                            </div>
                        )}    
                    </div>
             {/*Next working on our help center*/}
                        <div className ={Style.navbar_container_right_help}>
                            <p onClick ={(e) => openMenu(e)}>Help Center</p>
                            {help && (
                                <div className = {Style.navbar_container_right_help_box}>
                                <HelpCenter/>  
                                </div>
                            )}
                        </div> 
              {/*Next working on our Notification*/}
                       <div className = {Style.navbar_container_right_notify}>
                        {/*we'll take icon since we displaying icon instead of message */}
                         <MdNotifications className= {Style.notify} onClick={() => openNotification()}/>
                         {notification && <Notification/>}
                       </div>
            
             {/*Next is create button sections*/}
                    <div className = {Style.navbar_container_right_button}>  
                     {/*This buttton is dynamic and all buttons have different props and different call back fns*/}
                       <Button btnText = "Create"/>
                    </div>

             {/*We'll have to create the user profile*/}    
                   <div className = {Style.navbar_container_right_profile_box}> 
                        <div className = {Style.navbar_container_right_profile}> 
                               {/*render the image here*/}    
                        <Image src = {images.user1} alt = "Profile" width ={40} height = {40} onClick= {() => openProfile()}
                         className = {Style.navbar_container_right_profile}/>     
                         {profile && <Profile/>}{/*if profile then we'll have to render the profile component*/}
                        </div>
                   </div>
          {/*Menu button which will only display on a mobile device & not a desktop*/}
                    <div className= {Style.navbar_container_right_menuBtn}> 
                        <CgMenuRight className = {Style.menuIcon} 
                         onClick={() => openSideBar()}/>
                    </div>
                   </div>
            </div>
          {/*Here we will render the side bar component also only displayable in the mobile device*/} 
          {
            openSideMenu &&(
                <div className = {Style.SideBar}>  
                {/*in the side bar we'll set a state so that we can easily open and close it */}
                    <SideBar setOpenSideMenu = {setOpenSideMenu}/> 
                </div>
            )
          }

        </div>
    );
    
};

export default NavBar;