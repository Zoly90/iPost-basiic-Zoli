import React, { Component } from 'react';
import GlobalLeftNav from '../components/global-left-navigation';

class Dashboard extends Component {
  static displayName = 'Dashboard';

  
  render() {
    return (
      <div id='app'>
        <GlobalLeftNav/>
        <section id='contentSection'>
            <span>asdasdas</span>
        </section>
      </div>
    );
  }
}

export default Dashboard;
