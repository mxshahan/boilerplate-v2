import React from 'react';
import AppRouter from './routes';
import store from '../core/store'
import { Provider } from 'react-redux';
import { SuccessLoginUser } from './container/actions'
import './styles/style.scss';
import "antd/dist/antd.css";

let token = localStorage.getItem('token');
token && store.dispatch(SuccessLoginUser(token))

const App = () => (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

export default App;