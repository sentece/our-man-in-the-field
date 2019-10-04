import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { MainNavigator, NavigatorConfig } from "./Components/Menu/MainNavigator";
import Config from './Config/Config'
import reducer from './Reducers';

const client = axios.create({
  baseURL: Config.ApiRoot,
  responseType: 'json'
});

console.log(reducer);

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));
const AppContainer = createAppContainer(createDrawerNavigator(MainNavigator, NavigatorConfig));

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        )
    }
}