/* Import library dependencies */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import Navigation from '../components/shared/Navigation';

import ErrorBoundary from '../components/ErrorBoundary';

import Home from '../components/Home';
import Claim from '../components/ClaimComponent';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

/*
  Import components to plug-in to the router
  NOTE: routes should be the most spefic to the least spefic
*/

const setRef = {
  refNav: React.createRef(),
  refContent: React.createRef(),
  refFooter: React.createRef()
};


// UI container removed
const TitleRouteBare = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => {
      var newProps = {...props, ...rest};
      return (
          <TransitionGroup>  
              <Header {...newProps} />    
              <Navigation {...newProps} forwardRef={setRef.refNav} />     
              <CSSTransition key={window.location.pathname.split('/')[1]} timeout={500} classNames="fade" mountOnEnter={true} unmountOnExit={true} >
                  <div className="row">                
                  <main ref={setRef.refContent} className="main-section columns large-12 medium-12 small-12" tabIndex="-1">
                    <ErrorBoundary><Component {...newProps}/></ErrorBoundary>
                  </main>
                </div>
              </CSSTransition>
              <Footer {...newProps} forwardRef={setRef.refFooter} />
          </TransitionGroup>
      )}}/>
);

export default class AppRoutes extends Component { 
    render() {
        return (
            <Switch location={this.props.location}>
              <TitleRouteBare exact={ true } path='/'  component={Home} />
              <TitleRouteBare exact={ true } path='/claim'  component={Claim} />
            </Switch>


        );
  }
}
