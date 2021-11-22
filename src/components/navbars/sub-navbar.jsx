import React from "react";
import { Link } from "react-router-dom";

function SubNavbar({routes}) {

    return (
        <div className="sub-navbar">
            <nav style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem"
            }}>
                {routes.map((route) => {
                    return (
                        <Link to={route.path}>{route.label}</Link>
                    )
                })}
            </nav>
        </div>
    );
}

export default SubNavbar;
