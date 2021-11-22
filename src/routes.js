import React from "react";
import {Switch} from "react-router-dom";
import RoutesWithLayout from "./components/RoutesWithLayout/RoutesWithLayout";
import Main from "./layouts/Main/Main";
import Home from "./pages/Home/Home";

const Routes = () => {
    return (
        <Switch>
            <RoutesWithLayout layout={Main} component={Home} path="/" exact/>
        </Switch> 
    );
}

export default Routes;