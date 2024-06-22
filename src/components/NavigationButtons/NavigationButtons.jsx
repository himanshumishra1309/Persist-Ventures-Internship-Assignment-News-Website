import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavigationButtons.css'

const NavigationButtons = ({ routes, currentIndex }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const nextIndex = currentIndex < routes.length - 1 ? currentIndex + 1 : 0;
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : routes.length - 1;

  const nextPath = routes[nextIndex].path === "/" ? "/" : `/${routes[nextIndex].path}`;
  const prevPath = routes[prevIndex].path === "/" ? "/" : `/${routes[prevIndex].path}`;

  return (
    <div className="navigation-buttons">
      <Link to={prevPath} className="prev-button">
        Previous
      </Link>
      <Link to={nextPath} className="next-button">
        Next
      </Link>
    </div>
  );
};

export default NavigationButtons;
