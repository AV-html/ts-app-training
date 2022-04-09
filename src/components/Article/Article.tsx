import React from "react";

function Article(props: any) {
    return (
        // <React.Fragment> === <>
        <>
            <ArticleTitle title={props.title}/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fuga ipsa iure laborum nemo nihil numquam
                pariatur praesentium similique sint. Architecto atque eos esse fugiat ipsum repellendus suscipit voluptatem?
                Fugiat.
            </p>
        </>

    );
}

function ArticleTitle(props: any) {
    return (
        <h2>
            {props.title}
        </h2>
    );
}

export default Article;