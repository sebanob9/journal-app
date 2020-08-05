import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { setError, removeError } from '../../actions/ui';
import { startRegisterWithEmailPassName } from '../../actions/auth';

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  //const state = useSelector(state => state.ui.errorMessage)
  const { errorMessage } = useSelector(state => state.ui)

  const [ values, handleInputChange ] = useForm({
    name: '',
    email: '',
    password: '',
    password2: ''
});

  const { name, email, password, password2 } = values;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterWithEmailPassName(email, password, name ))
    } 
  }

  const isFormValid = () => {
    if (name.trim().length < 2 ) {
      dispatch(setError('Name is required'));
      return false
    } else if ( !validator.isEmail(email)) {
      dispatch(setError('Email not valid'));
      return false;
    } else if (password < 5 || password !== password2) {
      dispatch(setError('password should have 6 characters and match'));
      return false
    }

    dispatch(removeError())
    return true
  }

    return (
        <>
          <h3 className="auth__title">Register</h3>

          <form onSubmit= { handleRegister }>

                {
                  errorMessage && 
                  (<div className="auth__alert-error">
                  {errorMessage}
                </div>)
                }


                <input 
                type="text"
                placeholder="Name"
                name="name"
                className="auth__input"
                autoComplete="off"
                value={name}
                onChange= { handleInputChange }
                />

              <input 
                type="text"
                placeholder="Email"
                name="email"
                className="auth__input"
                autoComplete="off"
                value={email}
                onChange= { handleInputChange }
                />

              <input
                type="password"
                placeholder="Password"
                name="password"
                className="auth__input"
                value={password}
                onChange= { handleInputChange }
                />

                <input
                type="password"
                placeholder="Confirm password"
                name="password2"
                className="auth__input"
                value={password2}
                onChange= { handleInputChange }
                />

              <button
                type="submit"
                className="btn btn-primary btn-block mb-5"
                /* disabled= {true} */
              >
                  Register
              </button>


              <Link
                className="link"
                to="/auth/login">
                  Already registered
              </Link>
          </form>
        </>
    )
}
