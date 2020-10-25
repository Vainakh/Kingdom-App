import React from 'react';
import './App.css';
import Layout from '../src/components/Layout/Layout';
import KingdomBuilder from './containers/KingdomBuilder/KingdomBuilder';

function App() {
  return (
    <div>
      <Layout>
        <KingdomBuilder/>
      </Layout>
    </div> 
  );
}

export default App;
