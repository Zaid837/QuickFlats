import React from "react";
import Input from "../input";
import "./search-sidebar.styles.css";
import CustomButton from "../button/button.component";
const SearchSidebar = () => {
  return (
    <div className="search-sidebar">
      <div className="search-sidebar-content">
        <h5>Filters</h5>
        <form>
          <ul>
            <li>
              <Input type="text" name="state" placeholder="state" />
            </li>
            <li>
              <Input type="text" name="city" placeholder="city" />
            </li>
            <li>
              <label>payment plan</label>
              <br />
              <select name="field4" className="search-select">
                <option value="Monthly">Monthly</option>
                <option value="Quaterly(every 3 months)">
                  Quaterly(every 3 months)
                </option>
                <option value="Bi-annually(every 6 months)">
                  Bi-annually(every 6 months)
                </option>
                <option value="Yearly">Yearly</option>
              </select>
            </li>
            <li>
              <Input type="number" name="rooms" placeholder="rooms" />
            </li>
            <li>
              <Input type="number" name="min-price" placeholder="min-price" />
            </li>
            <li>
              <Input type="number" name="max-price" placeholder="max-price" />
            </li>
            <CustomButton label="search" size="150px" invertedButton />
          </ul>
        </form>
      </div>
    </div>
  );
};

export default SearchSidebar;
