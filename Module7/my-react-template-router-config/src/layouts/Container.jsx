import React from "react";
import propTypes from "prop-types";
import classNames from "classnames";

const Container = ({className, children, ...attrs}) => {
    const classes = classNames("ui-container", className);
    return (
        <div className={classes} {...attrs}>{children}</div>
    );
}

Container.propTypes = {
    classNames: propTypes.string,
    children: propTypes.node.isRequired
}

Container.defaultProps = {
    classNames: ""
}

export default Container;
