import React from 'react';
import * as E from './elements';
import * as GE from 'components/globalElements';
import Search from './search';
import Logo from './logo';
import Filter from './filter';
import { Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';


const Header = () => {

  const theme = useTheme();

  
  return (
    <E.HeaderWrapper style={{ backgroundColor: theme.palette.primary.light }}>
      <GE.ContentWrapper >
        <E.HeaderContent>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={6} lg={4} >
              <Logo />
            </Grid>
            <Grid item xs={6} lg={4} >
              <Search />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Filter />
            </Grid>
          </Grid>
        </E.HeaderContent>
      </GE.ContentWrapper>
    </E.HeaderWrapper>
  )
}

export default Header;