import React, { useEffect } from "react";
import * as E from "./elements";
import * as GE from "components/globalElements";
import { Card, Grid, Typography } from "@material-ui/core";
import { getGames } from "utils/serverApi";
import { setGamesList } from "utils/myRedux/actions";
import { useDispatch, useSelector } from "react-redux";
import { State } from "utils/myRedux/rootReducer";
import { orderingId, platformsId } from "utils/serverApi";

const GamesList = () => {
  const dispatch = useDispatch();

  const orderBy = useSelector((state: State) => state.orderBy);
  const platform = useSelector((state: State) => state.platform);
  const searchLine = useSelector((state: State) => state.searchLine);

  useEffect(() => {
    getGames(
      platformsId.get(platform) as string,
      orderingId.get(orderBy) as string,
      searchLine
    ).then((result) => {
      dispatch(setGamesList(result));
    });
  }, [orderBy, platform, searchLine]);

  const gamesList = useSelector((state: State) => state.gamesList);

  return (
    <E.GamesListWrapper>
      <GE.ContentWrapper>
        <Grid container direction="row" alignItems="stretch" spacing={3}>
          {gamesList.map((game, index) => {
            return (
              <Grid key={index.toString()} item xs={6} md={3}>
                <Card>
                  <Typography>{game.name}</Typography>
                  <Typography>{game.released}</Typography>
                  <Typography>{game.rating}</Typography>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </GE.ContentWrapper>
    </E.GamesListWrapper>
  );
};

export default GamesList;
