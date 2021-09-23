import { Navigate, Route } from 'react-router-dom';

export const ProtectedRoute = ({ ...props }) => {
  const hasID = JSON.parse(localStorage.getItem('@chatID'));
  const hasToken = JSON.parse(localStorage.getItem('@tokenID'));

  if (hasID && hasToken) return <Route {...props} />;
  else return <Navigate to="/" />;
};
