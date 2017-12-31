import React from 'react';

import Form from './Form';
import ResultsList from './ResultsList';

const Dashboard = () => (
  <div>
    <h2 className="testing">This is the DashboardPage</h2>
    <ResultsList />
    <Form />
  </div>
);

export default Dashboard;
