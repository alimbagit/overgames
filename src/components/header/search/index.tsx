import { InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import * as E from './elements';

const Search = () => {

    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    /**Получает строку поиска и производит поиск
     * @param value - строка поиска
     * @return Массив объектов
     */
    const SearchProcess = (value:string) => {
        
        setSearchValue(value);

    }
    return (
        <E.SearchWrapper>
            {/* <SearchBar
                value={searchValue}
                onChange={SearchProcess}
            // onRequestSearch={() => doSomethingWith(this.state.value)}
            /> */}

            <TextField
                // label="TextField"
                onChange={(e)=>SearchProcess(e.target.value)}
                placeholder={"search"}
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
    )
}

export default Search;