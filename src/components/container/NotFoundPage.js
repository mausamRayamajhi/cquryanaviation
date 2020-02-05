import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="display-3 text-center mt-5">
    404! - <Link to="/">Go home</Link>
  </div>
);

export default NotFoundPage;
