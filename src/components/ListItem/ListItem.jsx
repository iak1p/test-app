import React, { memo } from "react";
import * as Icons from "../../icons";
import "./ListItem.css";

const ListItem = ({ text, classList, type }) => {
  const Icon = Icons[type];
  return (
    <>
      <li className={classList}>
        <div className="list_item_content">
          <Icon />
          <p className="list_item__text">{text}</p>
        </div>
      </li>
    </>
  );
};

export default memo(ListItem);
