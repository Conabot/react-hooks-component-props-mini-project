import React from "react";


function About(blogData) {
    
//console.log();
const placeHolderImageUrl = "https://via.placeholder.com/215";
const imageUrl=blogData.image
    return( 
    <div className="about">
        <aside>
        <img src={imageUrl || placeHolderImageUrl} alt="blog logo"/>
        <p>{blogData.about}</p>
        </aside>
        
    </div>
    );
}


export default About;