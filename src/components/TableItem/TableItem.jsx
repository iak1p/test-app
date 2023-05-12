import React from "react";
import "./TableItem.css";

const TableItem = (props) => {
  const {
    user: { name, company, phone, email, country, status },
  } = props;
  return (
    <>
      <tr className="info">
        <td className="info_item">{name}</td>
        <td className="info_item">{company}</td>
        <td className="info_item mobile">{phone}</td>
        <td className="info_item mobile">{email}</td>
        <td className="info_item status">{country}</td>
        <td className="info_item status">
          {status === "Active" ? (
            <div className="info__btn active">{status}</div>
          ) : (
            <div className="info__btn">{status}</div>
          )}
        </td>
      </tr>
      <hr className="decor_line" />
    </>
  );
};

export default TableItem;
