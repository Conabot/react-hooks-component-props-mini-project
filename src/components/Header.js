import React from "react";


function Header(blogData) {
//console.log(blogData);
    return( 

        <header className="header">
            <h1>{blogData.name}</h1>
        </header>
    
    );
}


export default Header;