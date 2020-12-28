import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import * as E from './elements';

const BackButton = () => {

  return (
    <E.ButtonWrapper>
      <Link to="/">
        <Button variant="text" color="secondary" size="medium">{"<< Back to catalog"}</Button>
      </Link>
    </E.ButtonWrapper>
  )
};

export default BackButton;