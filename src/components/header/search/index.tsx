import { InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchLine } from "store/actions";
import { State } from "store/rootReducer";

import * as E from "./elements";

const Search = () => {
  const dispatch = useDispatch();
  const searchLine = useSelector((state: State) => state.searchLine);

  /**Получает строку поиска и меняет поле searchLine в redux харнилище
   * @param value - строка поиска
   */
  const SearchLineChange = (value: string) => {
    dispatch(setSearchLine(value));
  };

  return (
    <E.SearchWrapper>
      <TextField
        onChange={(e) => SearchLineChange(e.target.value)}
        placeholder={"search"}
        value={searchLine}
        size={"small"}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </E.SearchWrapper>
  );
};

export default Search;
