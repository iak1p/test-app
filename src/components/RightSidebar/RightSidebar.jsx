import React, { useState } from "react";
import { useSelector } from "react-redux";
import TableItem from "../TableItem/TableItem";
import "./RightSidebar.css";
import * as Icons from "../../icons";

const RightSidebar = () => {
  const users = useSelector((state) => state.users);
  const [inputValue, setValue] = useState("");
  const [usersAfterSearch, setUsers] = useState(users);

  const SearchIcon = Icons["SearchIcon"];

  const handleChange = (e) => {
    setValue(e.target.value);
    if (inputValue.length <= 1) setUsers(users);
  };

  const search = (e) => {
    if (e.key === "Enter") {
      const arr = users;
      const newArr = arr?.filter(
        (user) =>
          user.company === inputValue ||
          user.name === inputValue ||
          user.email === inputValue ||
          user.country === inputValue
      );
      if (inputValue !== "") setUsers(newArr);
      else setUsers(users);
    }
  };

  return (
    <>
      <div className="container">
        <h3 className="username">Hello Evano 👋🏼,</h3>
        <div className="main_div">
          <div className="main_div_header mobileDiv">
            <div className="leftside">
              <p className="leftside_title">All Customers</p>
              <p className="leftside_subtitle">Active Members</p>
            </div>
            <div className="rightside">
              <SearchIcon />
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                onKeyDown={search}
                className="search__input"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="main_div_main">
            <table>
              <tr className="table_header">
                <td className="table_name">Customer Name</td>
                <td className="table_company" key="company">
                  Company
                </td>
                <td className="table_number mobile">Phone Number</td>
                <td className="table_email mobile">Email</td>
                <td className="table_country status">Country</td>
                <td className="table_status status">Status</td>
              </tr>
              <hr className="decor_line" />
              {usersAfterSearch.length === 0
                ? users.map((user) => {
                    return <TableItem key={user.id} user={user} />;
                  })
                : usersAfterSearch?.map((user) => {
                    return <TableItem key={user.id} user={user} />;
                  })}
            </table>
          </div>
          <div className="main_div_footer">
            <div className="main_div_footer_leftside">
              <p>Showing data 1 to 8 of 256K entries</p>
            </div>
            <div className="main_div_footer_rightside">
              <div className="page_selection">{"<"}</div>
              <div className="page_selection active">1</div>
              <div className="page_selection">2</div>
              <div className="page_selection tablet">3</div>
              <div className="page_selection tablet">4</div>
              <div className="page_selection_more">...</div>
              <div className="page_selection">40</div>
              <div className="page_selection">{">"}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
