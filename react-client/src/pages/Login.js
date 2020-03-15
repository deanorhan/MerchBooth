import React, { useState } from 'react';
import axios from 'axios';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [failed, setFailed] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setFailed(false);

    const user = {
      email,
      password
    };

    axios.post('http://localhost:4000/login', user)
      .then(res => {
        console.log(res.data);
        sessionStorage.setItem('login', 'login');
      })
      .catch(err => {
        setFailed(true);
      });
  };

  return (
    <div>
      { failed &&
          <div className="alert alert-danger" role="alert">you fucked up</div>
      }
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input id="email" type="email"
              className="form-control"
              value={email}
              required
              autoFocus
              onChange={e => setEmail(e.target.value)}
              />
        </div>
        <div className="form-group">
          <label htmlFor="password">password</label>
          <input id="password" type="password"
              className="form-control"
              required
              onChange={e => setPassword(e.target.value)}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Login" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};
