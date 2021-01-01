import React, { useEffect } from "react";
import * as E from "./elements";
import * as GE from "components/globalElements";
import { Grid } from "@material-ui/core";
import { loadGames } from "store/actions";
import { useDispatch, useSelector } from "react-redux";
import { State } from "store/rootReducer";
import GameCard from './gameCard';

const GamesList = () => {
  const dispatch = useDispatch();

  const orderBy = useSelector((state: State) => state.orderBy);
  const platform = useSelector((state: State) => state.platform);
  const searchLine = useSelector((state: State) => state.searchLine);
  const gamesList = useSelector((state: State) => state.gamesList);
  
  useEffect(() => {
    dispatch(loadGames({ orderBy, platform, search: searchLine }));
  }, [dispatch, orderBy, platform, searchLine]);

  

  return (
    <E.GamesListWrapper>
      <GE.ContentWrapper>
        <Grid container direction="row" alignItems="stretch" spacing={3}>
          {gamesList.map((game, index) => {
            return (
              <Grid key={index.toString()} item xs={12} md={3}>

                <GameCard {...game} />
              </Grid>
            );
          })}
        </Grid>
      </GE.ContentWrapper>
    </E.GamesListWrapper>
  );
};

export default GamesList;
