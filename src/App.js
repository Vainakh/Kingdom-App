import React from 'react';
import './App.css';
import Layout from '../src/components/Layout/Layout';
import Kingdom from './containers/KingdomBuilder/KingdomBuilder';

function App() {
  return (
    <div>
      <Layout>
        <Kingdom/>
    </Layout>
    </div> 
  );
}

export default App;
