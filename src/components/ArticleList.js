import React from "react";
import Article from "./Article.js";


function ArticleList({posts}) {
//console.log(posts)

const articlelis=posts.map((post) => {
            return [
                <Article 
                key={post.id}
                title={post.title}
                date={post.date}
                preview={post.preview}
                 />]
    });
    return (
        <div className="articlelist">
            <main>{articlelis}</main>
         </div>
    );
}



export default ArticleList;