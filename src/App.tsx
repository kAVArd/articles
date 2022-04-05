import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { ListPage } from './pages';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
