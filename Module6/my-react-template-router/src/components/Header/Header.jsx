import React from "react";

import propTypes from "prop-types";
import classNames from "classnames";

import Container from "../../layouts/Container";

import {FaBuysellads} from 'react-icons/fa';

import './Header.scss';

import {ReactComponent as LogoIcon} from "../../assets/img/logo.svg"

const Header = ({isLogo, isFixed, className, ...attrs}) => {
    const classes = classNames("Header",
        className,
        {
            isFixed,
        });
    return (
        <header className={classes} {...attrs}>
            <Container>
                <div className="Header flex justify-between py-2 mb-4">
                    <div className="Logo">
                        {isLogo && <LogoIcon/>}
                        <span>React app</span>
                    </div>
                    <ul className="ui-button-group">
                        <li className="ui-link">Home</li>
                        <li className="ui-link">About</li>
                    </ul>
                </div>
            </Container>
        </header>)
};

Header.propTypes = {
    isLogo: propTypes.bool,
    isFixed: propTypes.bool,
    classNames: propTypes.string
}

Header.defaultProps = {
    isLogo: false,
    isFixed: false,
    classNames: ""
}

export default Header;
