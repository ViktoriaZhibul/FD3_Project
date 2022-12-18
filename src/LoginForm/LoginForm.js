import React from 'react';
import { useState } from 'react';

import "./LoginForm.css";


function LoginForm({title, handleClick}) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    return (
        <>
            <div className="conteiner_login">
                <div className="user__img-container">
                </div>
                <div className="form__input">
                    <input 
                        className="header__contacts-font log_input"
                        type="email"
                        value={email}
                        placeholder="E-mail"
                        onChange={(event) => setEmail(event.target.value)} 
                    />
                    <br />
                    <span className='error'></span>
                    <input
                        className="header__contacts-font log_input"
                        type="password"
                        value={pass}
                        placeholder="Password"
                        onChange={(event) => setPass(event.target.value)} 
                    />
                    <br />
                    <span className='error'></span>
                </div>
                    <button 
                        className="header__contacts-font login_button"
                        onClick={() => {
                            handleClick(email, pass);
                            setEmail("");
                            setPass("");
                        }
                        }
                    >
                        {title}
                    </button>
            </div>
        </>
    )
}

export default LoginForm;