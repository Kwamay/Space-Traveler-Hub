import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

test('Navbar renders without errors', () => {
  render(
    <Router>
      <Navbar />
    </Router>,
  );
});
