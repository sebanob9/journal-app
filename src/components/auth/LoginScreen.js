import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth'
import validator from 'validator';
import { setError, removeError } from '../../actions/ui'

export const LoginScreen = () => {

  const dispatch = useDispatch();

  const { loading } = useSelector(state => state.ui)

  const { errorMessage } = useSelector(state => state.ui)

  const [ values, handleInputChange ] = useForm({
      email: 'seba@nob.com',
      password: ''
  })

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startLoginEmailPassword(email, password))
    }
    
  }

  const handleLoginGoogle = () => {
    dispatch(startGoogleLogin())
  }

  const { email, password } = values;

  const isFormValid = () => {
    if ( !validator.isEmail(email)) {
      dispatch(setError('Email not valid'));
      return false;
    } else if (password < 5 ) {
      dispatch(setError('incorrect password'));
      return false
    }

    dispatch(removeError())
    return true
  }

    return (
        <>
          <h3 className="auth__title">Login</h3>

          <form onSubmit={ handleLogin}>
                 {
                  errorMessage && 
                  (<div className="auth__alert-error">
                  {errorMessage}
                </div>)
                }

              <input 
                type="text"
                placeholder="email"
                name="email"
                className="auth__input"
                autoComplete="off"
                value= { email }
                onChange= { handleInputChange }
                />

              <input
                type="password"
                placeholder="password"
                name="password"
                className="auth__input"
                value= { password }
                onChange= { handleInputChange }
                />

              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled= {loading}
              >
                  Login
              </button>

              <div className="auth__social-networks">
                  <p>Login with Social Networks</p>
                  <div 
                    onClick= {handleLoginGoogle}
                    className="google-btn">
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                    </div>
              </div>

              <Link
                className="link"
                to="/auth/register">
                  Create new account
              </Link>
          </form>
        </>
    )
}
