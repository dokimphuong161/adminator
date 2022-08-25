import { forwardRef } from 'react';
import { NavLink as NavLinkBase } from 'react-router-dom';

const NavLink = forwardRef((props, ref) => {
    return <NavLinkBase ref={ref} {...props} className={props.activeClassName} target={props.target} />;
});

NavLink.propTypes = {};

export default NavLink;
