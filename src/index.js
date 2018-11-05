import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './routes';
//import react router dependents
import { HashRouter as Router, Route } from 'react-router-dom'
import store from './store/Store';
import { Provider } from 'react-redux';

//import page-layout wrapper (nav, actionbar, sidebar, footer, etc.)
import Layout from "./components/Layout";

import * as serviceWorker from './serviceWorker';

const App = () => (
    <Provider store={ store } key="provider">       
                <Layout>
                    <Router>
                        <Route render={({ location }) => (
                            <AppRoutes location={location} />  
                        )}/>
                    </Router>
                </Layout>
    </Provider>
);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
