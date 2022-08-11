import React from "react";

import Container from "layouts/Container";

const Footer = ({...attrs}) => {
    return (
        <footer className="Footer" {...attrs}>
            <Container>
                <div className="Footer py-2 mt-6">
                    <p className="text-center text-xs" style={{opacity: 0.6}}>Сделано A.P.</p>
                </div>
            </Container>
        </footer>)
};

export default Footer;
