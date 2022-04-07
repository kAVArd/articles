import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { DetailsPage, ListPage } from './pages';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/articles/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
