import React from 'react';

import classes from './NotFound.module.scss';
import pageNotFound from '../../assets/pageNotFound.jpg';

const NotFound: React.FC = () => (
  <div className={classes.component}>
    <img src={pageNotFound}
         alt={'Page Not Found'} />
  </div>
);

export default NotFound;
