import React from "react"; 
import Link from "next/link";

//INTERNAL IMPORTS
import Style from "./Discover.module.css";

//we'll need a demo data ie we'll take an array and the name of the page and the router
const Discover = () => {
    //DISCOVER NAVIGATION MENU
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
    return ( 
        //we'll loop over the entire div menu
    <div>
        {discover.map((el,i) => (
            <div key={i + 1} className = {Style.discover}>   
              <Link href= {{pathname: `${el.link}` }}>
                 {el.name}
              </Link>
            </div>
        ))}
    </div>)
    
};

export default Discover;