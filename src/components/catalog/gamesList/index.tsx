import React, { useEffect } from "react";
import * as E from "./elements";
import * as GE from "components/globalElements";
import { Grid, Typography } from "@material-ui/core";
import { loadGames, addGames } from "store/actions";
import { useDispatch, useSelector } from "react-redux";
import { State } from "store/rootReducer";
import GameCard from "./gameCard";
import LoadingAnimate from "components/loading-animate";
import InfiniteScroll from "react-infinite-scroll-component";

const GamesList = () => {
  const dispatch = useDispatch();

  const orderBy = useSelector((state: State) => state.orderBy);
  const platform = useSelector((state: State) => state.platform);
  const searchLine = useSelector((state: State) => state.searchLine);
  const gamesList = useSelector((state: State) => state.gamesList);
  const isAddingGames = useSelector((state: State) => state.isAddingGames);
  const isLoadingGames = useSelector((state: State) => state.isLoadingGames);
  const currentPage = useSelector((state: State) => state.currentPage);

  useEffect(() => {
    dispatch(loadGames({ orderBy, platform, search: searchLine }));
  }, [dispatch, orderBy, platform, searchLine]);

  const handleAddGames = () => {
    if (!isAddingGames)
      dispatch(
        addGames({
          orderBy,
          platform,
          search: searchLine,
          page: currentPage + 1,
        })
      );
  };

  return (
    <E.GamesListWrapper>
      <GE.ContentWrapper>
        {isLoadingGames ? (
          <LoadingAnimate />
        ) : (
          <InfiniteScroll
            dataLength={gamesList.length - 20} //This is important field to render the next data
            next={handleAddGames}
            hasMore={true}
            loader={<LoadingAnimate />}
            endMessage={
              <Typography style={{ textAlign: "center" }}>list end</Typography>
            }
          >
            <Grid container direction="row" alignItems="stretch" spacing={3}>
              {gamesList.map((game, index) => {
                return (
                  <Grid key={index.toString()} item xs={12} md={3}>
                    <GameCard {...game} />
                  </Grid>
                );
              })}
            </Grid>
          </InfiniteScroll>
        )}
      </GE.ContentWrapper>
    </E.GamesListWrapper>
  );
};

export default GamesList;
