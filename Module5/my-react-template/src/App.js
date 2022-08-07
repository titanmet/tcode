import React from "react";

import "./scss/main.scss";

import {Header, Footer} from "./components";
import {Container} from "./layouts";

const App = () => {
    return (
        <div className="ui-wrapper">
            <Header/>
            <div className="ui-content-wrapper">
                <div className="ui-container">
                    <Container>
                        <p className="text-2xl">template</p>
                    </Container>
                </div>
            </div>
            <Footer/>
        </div>)
};

export default App;
