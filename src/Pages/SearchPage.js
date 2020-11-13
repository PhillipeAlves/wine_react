import React, { useState } from "react";
import { Search, HeaderSearch } from "../Components";

export const SearchPage = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className='search-wrapper'>
      <HeaderSearch loading={loading} />
      <Search setLoading={setLoading} />
    </div>
  );
};
