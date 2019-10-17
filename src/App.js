import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import MainNavigator from './Components/Menu/MainNavigator';
import AuthNavigator from './Components/Auth/index';
import Config from './Config/Config'
import reducer from './Reducers';

const client = axios.create({
    baseURL: Config.ApiRoot,
    responseType: 'json'
});

console.log(AuthNavigator);

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));
const AppContainer = createAppContainer(AuthNavigator);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        )
    }
}