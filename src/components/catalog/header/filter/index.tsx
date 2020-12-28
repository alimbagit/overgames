import React, { useEffect } from "react";
import * as E from "./elements";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { State } from "store/rootReducer";
import { setOrderBy, setPlatform, loadPlatforms } from "store/actions";
import { ORDER_OPTIONS } from "./constants";

/**Фильтры для отображения игр */
const Filter = () => {
  const orderBy = useSelector((state: State) => state.orderBy);
  const platform = useSelector((state: State) => state.platform);
  const platforms = useSelector((state: State) => state.platforms);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPlatforms)
  }, [dispatch])

  const handleOrderBy = (value: string) => {
    dispatch(setOrderBy(value));
  };

  const handleChangePlatform = (value: string) => {
    dispatch(setPlatform(value));
  };

  return (
    <E.LogoWrapper>

      {/* Элемент выбора метода соритровки */}
      <FormControl variant="filled" style={{ width: "50%", margin: "0 5px" }}>
        <InputLabel htmlFor="oreder-by-select">Order by</InputLabel>
        <Select
          inputProps={{
            name: "order-by",
            id: "oreder-by-select",
          }}
          value={orderBy}
          onChange={(e) => handleOrderBy(e.target.value as string)}
        >
          {ORDER_OPTIONS.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Элемент для выбора платформы */}
      <FormControl variant="filled" style={{ margin: "0 5px", width: "50%" }}>
        <InputLabel htmlFor="platform-select">Platform</InputLabel>
        <Select
          inputProps={{
            name: "platform",
            id: "platform-select",
          }}
          value={platform}
          onChange={(e) => handleChangePlatform(e.target.value as string)}
        >
          <MenuItem value="All">
            All
          </MenuItem>
          {platforms.map(({ name, id }) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </E.LogoWrapper >
  );
};

export default Filter;
