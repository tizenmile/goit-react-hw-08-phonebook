import css from './Auth.module.css'
import { Button } from '@mui/material';
import { login, register } from 'redux/operations';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useState } from 'react';



export const Login = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.contacts.error);
    const [loginError, setLoginError] = useState(false)
    const handleLogin = (e) => {
        e.preventDefault()
        const loginProps = {
            email: e.target.form.email.value,
            password: e.target.form.password.value
        }
        if (e.target.form.email.value === "" || e.target.form.password.value === "") {
            setLoginError(true)

        } else {
            setLoginError(false)
            dispatch(login(loginProps))
        }

    }

    return (
        <div>
            <div className={css.loginbox}>
                <h2>Login</h2>
                <form>
                    <div className={css.userbox}>
                        <input type="text" name="email" required />
                        <label>Email</label>
                    </div>
                    <div className={css.userbox}>
                        <input type="password" name="password" required />
                        <label>Password</label>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button onClick={handleLogin} type='submit' variant="contained">Login</Button>
                        <Link to="/register" style={{ textDecoration: "none" }}>
                            <Button variant="contained">Register</Button>
                        </Link>
                    </div>
                </form>
                <div><p>{loginError ? 'Please type login/password' : error ? "Verify your login/password" : false}</p></div>
            </div>
        </div>
    )
}

export const Register = () => {
    const isError = useSelector(state => state.contacts.error);
    const dispatch = useDispatch();
    const handleRegister = (e) => {
        e.preventDefault()
        const registerProps = {
            name: e.target.form.name.value,
            email: e.target.form.email.value,
            password: e.target.form.password.value
        }
        dispatch(register(registerProps))
    }
    return (
        <div>
            <div className={css.loginbox}>
                <h2>Register</h2>
                <form>
                    <div className={css.userbox}>
                        <input type="text" name="name" required />
                        <label>Name</label>
                    </div>
                    <div className={css.userbox}>
                        <input type="text" name="email" required />
                        <label>Email</label>
                    </div>
                    <div className={css.userbox}>
                        <input type="password" name="password" required />
                        <label>Password</label>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button onClick={handleRegister} type='submit' variant="contained">Register</Button>
                        <Link to="/login" style={{ textDecoration: "none" }}>
                            <Button variant="contained">Back to login</Button>
                        </Link>
                    </div>
                </form>
                <div><p>{isError === 'Request failed with status code 400' && 'Please check that the data is entered correctly'}</p></div>
            </div>
        </div>
    )
}