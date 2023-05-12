import React, { memo } from "react";
import * as Icons from "../../icons";
import "./ListItem.css";

const ListItem = ({ text, classList, type, arrow }) => {
  const Icon = Icons[type];
  return (
    <>
      <li className={classList}>
        <div className="list_item_content">
          <div className="list_item_content__div">
            <Icon />
            <p className="list_item__text">{text}</p>
          </div>
          {arrow ? <p className="arrow">{">"}</p> : null}
        </div>
      </li>
    </>
  );
};

export default memo(ListItem);
