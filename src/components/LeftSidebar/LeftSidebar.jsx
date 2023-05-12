import React, { memo } from "react";
import ListItem from "../ListItem/ListItem";
import "./LeftSidebar.css";
import * as Icons from "../../icons";

const LeftSidebar = () => {
  const logoIcon = Icons["LogoIcon"];

  const dropDown = () => {
    document.getElementsByClassName("list")[0].classList.toggle("active");
  };

  return (
    <div className="left_sidebar">
      <div className="left_sidebar__container">
        <div className="left_side__logo">
          <div className="logo">
            {logoIcon()}
            <h3 className="logo_text">
              Dashboard<span className="logo_text__span">v.01</span>
            </h3>
          </div>
          <div className="drop-down_list" onClick={dropDown}></div>
        </div>
        <ul className="list">
          <ListItem
            text="Dashboard"
            classList="list_item"
            type="IconList1"
            arrow={false}
          />
          <ListItem text="Product" classList="list_item" type="IconList2" arrow={true} />
          <ListItem
            text="Customers"
            classList="list_item active"
            type="IconList3"
            arrow={true}
          />
          <ListItem text="Income" classList="list_item" type="IconList4" arrow={true} />
          <ListItem text="Promote" classList="list_item" type="IconList5" arrow={true} />
          <ListItem text="Help" classList="list_item" type="IconList6" arrow={true} />
        </ul>
      </div>
    </div>
  );
};

export default memo(LeftSidebar);
