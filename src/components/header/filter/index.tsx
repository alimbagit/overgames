import React, { useState } from "react";
import * as E from "./elements";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { orderingId, platformsId } from "utils/serverApi";
import { useDispatch, useSelector } from "react-redux";
import { State } from "utils/myRedux/rootReducer";
import { setOrderBy, setPlatform } from "utils/myRedux/actions";
import { render } from "react-dom";

/**Фильтры для отображения игр */
const Filter = () => {
  // const [orderBy, setOrderBy] = useState(orderingId[0]);
  // const [platform, setPlatform] = useState(platformsId[0]);
  const [directionSort, setDirectionSort] = useState(true);

  const orderBy = useSelector((state: State) => state.orderBy);
  const platform = useSelector((state: State) => state.platform);

  const dispatch = useDispatch();

  const handleOrderBy = (value: string) => {
    dispatch(setOrderBy(value));
  };

  const handleChangePlatform = (value: string) => {
    dispatch(setPlatform(value));
  };

  return (
    <E.LogoWrapper>
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
          <MenuItem value={"Release date"}>Release date</MenuItem>
          <MenuItem value={"Name"}>Name</MenuItem>
          <MenuItem value={"Popularity"}>Popularity</MenuItem>
        </Select>
      </FormControl>

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
            return <MenuItem value={namePlatform}>{namePlatform}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </E.LogoWrapper>
  );
};

export default Filter;
