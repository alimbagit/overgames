import React, { useState } from 'react';
import * as E from './elements';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

const Filter = () => {

    const [orderBy, setOrderBy] = useState("Popularity");
    const [platform, setPlatform] = useState("All");
    const [directionSort, setDirectionSort] = useState(true);

    const handleOrderBy = (value: string) => {
        console.log(value);
        setOrderBy(value);
    }

    const handleChangePlatform = (value: string) => {
        console.log(value);
        setPlatform(value);
    }

    return (
        <E.LogoWrapper>
            <FormControl variant="filled" style={{ width: '50%', margin: '0 5px' }}>
                <InputLabel htmlFor="oreder-by-select">Order by</InputLabel>
                <Select
                    inputProps={{
                        name: "order-by",
                        id: "oreder-by-select"
                    }}
                    value={orderBy}
                    onChange={(e) => handleOrderBy(e.target.value as string)}
                >
                    <MenuItem value={"Release date"}>Release date</MenuItem>
                    <MenuItem value={"Name"}>Name</MenuItem>
                    <MenuItem value={"Popularity"}>Popularity</MenuItem>
                </Select>


            </FormControl>
            <FormControl variant="filled" style={{ margin: '0 5px', width: '50%' }}>
                <InputLabel htmlFor="platform-select">Platform</InputLabel>
                <Select
                    inputProps={{
                        name: "platform",
                        id: "platform-select"
                    }}
                    value={platform}
                    onChange={(e) => handleChangePlatform(e.target.value as string)}

                >
                    <MenuItem value={"All"}>All</MenuItem>
                    <MenuItem value={"PC"}>PC</MenuItem>
                    <MenuItem value={"XBOX"}>XBOX</MenuItem>
                    <MenuItem value={"PlayStation"}>PlayStation</MenuItem>
                    <MenuItem value={"Andriod"}>PlayStation</MenuItem>

                </Select>
            </FormControl>
        </E.LogoWrapper>
    )
}

export default Filter;