import { IGameDescription } from 'models/game-description';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from "react-router-dom";
import { useParams } from "react-router-dom";
import { loadGameDescription } from 'services';
import BackButton from './back-button';
import GameDescriptionViewer from './game-description-viewer';
import LoadingAnimate from 'components/loading-animate';
import * as GE from 'components/globalElements';


interface IParams {
  game_name: string;
}

const GameDescription: React.FC<RouteComponentProps> = ({ location, match }) => {

  const { game_name } = useParams<IParams>(); //Берем параметр из адресной строки
  const [gameDescription, setGameDescription] = useState<IGameDescription>();

  useEffect(() => {
    loadGameDescription(game_name).then((result) => setGameDescription(result));
  }, [game_name]);

  return (
    <GE.ContentWrapper>
      <BackButton />
      {gameDescription ? <GameDescriptionViewer {...gameDescription} /> : <LoadingAnimate />}
    </GE.ContentWrapper>
  )
};

export default GameDescription;