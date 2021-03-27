import React, {memo, Suspense} from 'react';
import {Provider} from "react-redux";
import {renderRoutes} from "react-router-config";
import {HashRouter} from "react-router-dom";

import Header from "@/components/header"
import Footer from "@/components/footer"
export default memo(function(props) {
    return (
        <HashRouter>
            <Header/>
            hello world
            <Footer/>
        </HashRouter>
    );

})

