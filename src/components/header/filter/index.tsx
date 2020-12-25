import React from "react";
import * as E from "./elements";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { orderingId, platformsId } from "utils/serverApi";
import { useDispatch, useSelector } from "react-redux";
import { State } from "utils/myRedux/rootReducer";
import { setOrderBy, setPlatform } from "utils/myRedux/actions";

/**Фильтры для отображения игр */
const Filter = () => {
  const orderBy = useSelector((state: State) => state.orderBy);
  const platform = useSelector((state: State) => state.platform);

  const dispatch = useDispatch();

  const handleOrderBy = (value: string) => {
    dispatch(setOrderBy(orderingId.get(value) as string));
  };

  const handleChangePlatform = (value: string) => {
    dispatch(setPlatform(platformsId.get(value) as string));
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
          {Array.from(orderingId).map(([nameOrdering, idOrdering]) => {
            return (
              <MenuItem key={nameOrdering} value={nameOrdering}>
                {nameOrdering}
              </MenuItem>
            );
          })}
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
          {Array.from(platformsId).map(([namePlatform, idPlatform]) => {
            return (
              <MenuItem key={namePlatform} value={namePlatform}>
                {namePlatform}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </E.LogoWrapper>
  );
};

export default Filter;
