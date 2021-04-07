import React from "react";
import SearchSidebar from "../components/searchSidebar/search-sidebar.component";
import FlatContainer from "../components/FlatContainer/flat-container.component";

const SearchFlatPage = () => {
  return (
    <div style={{ marginTop: "60px" }}>
      <SearchSidebar />
      <div className="content-area">
        <FlatContainer />
      </div>
    </div>
  );
};

export default SearchFlatPage;
