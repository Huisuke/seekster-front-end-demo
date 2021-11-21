import React from "react";

function SideBar(props) {
    const {itemList} = props;
    return (
        <div className="sidebar">
            {itemList?.map((item) => {
                return (
                    <div>{item.label}</div>
                )
            })}
        </div>
    );
}

export default SideBar;
