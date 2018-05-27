import React from 'react';
import {render} from 'react-dom';

import PlayList from './src/play-list/components/playlist';
import data from './src/api.json';

// const app = document.getElementById('app');
// const gretting = <h1>hello world!</h1>;
//ReactDOM.render(gretting, app);

render(<PlayList data = {data}/>, app);