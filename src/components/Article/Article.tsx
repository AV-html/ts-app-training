import React from "react";

function Article() {
    return (
        // <React.Fragment> === <>
        <>
            <ArticleTitle/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fuga ipsa iure laborum nemo nihil numquam
                pariatur praesentium similique sint. Architecto atque eos esse fugiat ipsum repellendus suscipit voluptatem?
                Fugiat.
            </p>
        </>

    );
}

function ArticleTitle() {
    return (
        <h2>
            ArticleTitle
        </h2>
    );
}

export default Article;