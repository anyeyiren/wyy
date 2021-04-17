 import React, {memo, Suspense} from 'react';
import {Provider} from "react-redux";
import {renderRoutes} from "react-router-config";
import {HashRouter} from "react-router-dom";

 import routes from "./router";
 import store from "./store"

import Header from "@/components/header"
import Footer from "@/components/footer"
import AppPlayer from "@/pages/player/app-player-bar"
export default memo(function(props) {
    return (
        <Provider store={store}>
            <HashRouter>
                <Header/>
                <Suspense fallback={<div>page loading</div>}>
                    {renderRoutes(routes)}
                </Suspense>
                <Footer/>
                <AppPlayer/>
            </HashRouter>
        </Provider>

    );

})

