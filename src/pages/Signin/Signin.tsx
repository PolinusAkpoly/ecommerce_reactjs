/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/12/2023 08:44:13
*/
import React, { FC, useEffect, Fragment, useState } from 'react';
// import Loading from '../Loading/Loading';
import './Signin.css';
import { Link, Navigate } from 'react-router-dom';
import PageBanner from '../../components/PageBanner/PageBanner';
import { useFormik } from 'formik';
import { validateLoginForm } from '../../helpers/utils';
import { signin } from '../../api/entity';
import { useDispatch } from 'react-redux';
import { CONNECTED } from '../../redux/actions/actionTypes';
import { useSelector } from 'react-redux';
import { getAuthState } from '../../redux/selectors/authSelectors';




interface SigninProps {

}


const Signin: FC<SigninProps> = () => {
  const validate = (values: any) => validateLoginForm(values)
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState<boolean>(false)
  const [formError, setFormError] = useState<string>('');
  const isAuth = useSelector(getAuthState)
  // const [value, setValue] = useState('');


  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

      // setLoading(false)
    }
    runLocalData()
  }, [])

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: async (user) => {
      
      const result = await signin(user)
      if (result.isSuccess) {
        setRedirect(true)
        setFormError('')
        dispatch({
         type: CONNECTED,
         payload:{
          token: result.token ,
          userId: result.userId,
         } 
        })
      } else {
        setRedirect(false)
        setFormError(result.message)
      }

      //  alert(JSON.stringify(user, null, 2) )
    },
  });

  

  if (redirect) {
    return < Navigate to = "/account" />
  }

  if (isAuth) {
    return < Navigate to = "/account" />
  }


  return (
    <Fragment>
      <PageBanner name="Login Form" />
      <div className="Signin">
        <div className="main_content">
          <div className="login_register_wrap section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-md-10">
                  <div className="login_wrap">
                    <div className="padding_eight_all bg-white">
                      <div className="heading_s1">
                        <h3>Login</h3>
                      </div>
                      <form  onSubmit={formik.handleSubmit}  className="ng-untouched ng-pristine ng-invalid">
                      <p className='error'>{formError}</p>
                        <div className="form-group mb-3">
                          <input type="text" 
                          name="email"
                           placeholder="Your Email"
                            className="form-control ng-untouched ng-pristine ng-invalid"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                            <div className="error">{formik.errors.email}</div>
                          ) : null}
                        </div>
                        <div className="form-group mb-3">
                          <input type="password"
                           name="password" 
                           placeholder="Password"
                            className="form-control ng-untouched ng-pristine ng-invalid"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ? (
                            <div className="error">{formik.errors.password}</div>
                          ) : null}
                        </div>
                        <div className="login_footer form-group mb-3">
                        {/*  <div className="chek-form">
                             <div className="custome-checkbox">
                              <input type="checkbox" name="checkbox" id="exampleCheckbox1" defaultValue="" className="form-check-input" />
                              <label htmlFor="exampleCheckbox1" className="form-check-label">
                                <span>Rememberme</span></label></div> 
                          </div>
                          <Link to="#">Forgot password?</Link>*/}
                        </div> 
                        <div className="form-group mb-3">
                          <button  type="submit" name="login" className="btn btn-fill-out btn-block">Log in</button>
                        
                        </div>
                      </form>
                      <div className="different_login"><span>
                        or</span></div>
                      <ul className="btn-login list_none text-center">
                        <li><Link to="#" className="btn btn-facebook"><i className="ion-social-facebook" />Facebook</Link>
                        </li>
                        <li><Link to="#" className="btn btn-google"><i className="ion-social-googleplus" />Google</Link>
                        </li>
                      </ul>
                      <div className="form-note text-center">Don't Have an Account? <Link to="/signup">Sign
                        up
                        now</Link></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* } */}
    </Fragment>
  );
}

export default Signin;