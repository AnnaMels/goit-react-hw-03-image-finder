// import { Component } from "react";

export default function Button({ onClick }) {
    // state = {
    //     page: 2,
    // }

    // onLoadMoreClick = () => {
    //     this.setState((prevState) => ({
    //         page: prevState.page + 1,
    //     }));

    //     console.log(this.state);
    // }

 
    return (
        <button type='submit' onClick={onClick}>LoadMore</button>
    );
}