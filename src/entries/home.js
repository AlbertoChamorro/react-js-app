import React from 'react';
import { render } from 'react-dom';

import Home from '../pages/containers/home'
// import PlayList from './src/play-list/components/playlist';
// import data from './src/api.json';

const app = document.getElementById('app');

render(<Home />, app);