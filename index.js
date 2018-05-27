import React from 'react';
import {render} from 'react-dom';

import Media from './src/play-list/components/media';
//console.log('hello world');

// const app = document.getElementById('app');
// const gretting = <h1>hello world!</h1>;

//ReactDOM.render(gretting, app);


render(<Media title="Que es React.js?" 
            author = "Alberto Chamorro"
            imagePath = "./images/bitcoin.jpeg"
            type = "video"/>, app);