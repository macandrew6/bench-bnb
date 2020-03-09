import React from 'react';
import { Link, Route } from 'react-router-dom';

export const ReviewLink = ({ label, to }) => {
  return (
    <Route path={to} children={({ match }) => (
      <div>
        {match ? '' : <Link to={to}>{label}</Link>}
      </div>
    )} />
  );
};