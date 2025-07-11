import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import { validateEmail } from '../../utils/helper';

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email.');
      return;
    }

    if (!password) {
      setError('Please enter the password.');
      return;
    }

    setError(null);
    setLoading(true);

    try {
      // Simulate API login logic
      console.log('Logging in with:', { email, password });

      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Navigate after login success
      // navigate('/dashboard');
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('Something went wrong. Please try again!');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="w-full max-w-md p-6 sm:p-8 bg-white rounded-xl shadow-md"
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-1">Welcome Back</h3>
      <p className="text-sm text-gray-600 mb-6">Please enter your details to log in</p>

      <Input
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        label="Email Address"
        placeholder="johndoe@example.com"
      />

      <Input
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        label="Password"
        placeholder="Min 8 characters"
      />

      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:from-pink-600 hover:to-fuchsia-600 disabled:from-gray-400 disabled:to-gray-500 text-white text-sm py-2.5 font-semibold rounded-md transition mb-3 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <div className="h-4 w-4 border-2 border-white border-t-transparent animate-spin rounded-full"></div>
            Logging In...
          </>
        ) : (
          'LOGIN'
        )}
      </button>

      <p className="text-sm text-center text-gray-700">
        Don’t have an account?{' '}
        <button
          type="button"
          onClick={() => setCurrentPage('signup')}
          className="font-medium text-violet-600 underline"
        >
          Sign Up
        </button>
      </p>
    </form>
  );
};

export default Login;
