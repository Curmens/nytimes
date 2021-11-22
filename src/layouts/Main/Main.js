import React from "react";
import Appbar from "../../components/Appbar/Appbar";

const Main = (props) => {
    const { children } = props;
    return (
        <div>
        <Appbar />
        {children}
        </div>
    );
};

export default Main;
