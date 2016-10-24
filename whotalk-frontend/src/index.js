import React from 'react';
import ReactDOM from 'react-dom';

// REDUX

import { Provider } from 'react-redux';


import {App} from 'containers';

import store from './store';



$(window).bind("load", function() {
    $('#loader').addClass('hide');
    ReactDOM.render((
        <Provider store={store}>
            <App/>
        </Provider>
    ), document.getElementById('root'));
});
