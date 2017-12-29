import React from 'react';

import Form from './Form';
import ResultsList from './ResultsList';
import VideoPlayer from './VideoPlayer';


const Dashboard = () => (
  <div>
    <h2>This is the DashboardPage</h2>
    <ResultsList />
    <Form />
    <VideoPlayer />
  </div>
);

export default Dashboard;
