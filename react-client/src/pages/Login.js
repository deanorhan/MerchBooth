import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  document.title = 'Login | Merch Booth';

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
      .catch(() => {
        setFailed(true);
      });
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
      { failed &&
          <div className="alert alert-danger" role="alert">you fucked up</div>
      }
      <form onSubmit={handleSubmit} style={{ width: '400px'}}>
        <h1 className="text-center" style={{ marginBottom: '1rem' }}>Login</h1>

        <div className="form-group">
          <label htmlFor="email" className="sr-only">email</label>
          <input id="email" type="email"
              className="form-control"
              value={email}
              required
              autoFocus
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="sr-only">password</label>
          <input id="password" type="password"
              className="form-control"
              required
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Login" className="btn btn-block btn-primary" />
        </div>
      </form>
    </div>
  );
}
