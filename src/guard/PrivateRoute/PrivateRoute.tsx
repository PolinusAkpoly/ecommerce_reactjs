/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 27/12/2023 12:19:02
*/


import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getAuthState } from '../../redux/selectors/authSelectors';

const PrivateRoute = ({ children }: any) => {

 const isAuth = useSelector(getAuthState)
  return isAuth ? children : <Navigate replace to="/signin" />
  
}

export default PrivateRoute;


