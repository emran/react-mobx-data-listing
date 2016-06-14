import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main';

const rootEl = document.getElementById('contest-list');
ReactDOM.render( <AppContainer><Main/></AppContainer>, rootEl );

if (module.hot) {
    module.hot.accept('./components/main', () => {
        // If you use Webpack 2 in ES modules mode, you can
        // use <App /> here rather than require() a <NextApp />.
        const NextApp = require('./components/main').default;
        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            rootEl
        );
    });
}