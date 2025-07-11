import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';
import { validateEmail } from '../../utils/helper';

const SignUp = ({ setCurrentPage }) => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

  let profileImageUrl = "";

  if(!fullName){
    setError("Please enter full name.")
    return
  };
  
  if(!validateEmail(email)){
    setError("Please enter a valid email address.")
    return
  };

  if(!password){
    setError("Please enter the password.")
    return;
  };

  if(!confirmPassword){
    setError("Please enter the password.")
    return;
  };

  setError("");

  //Signup Api call

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
      onSubmit={handleSignUp}
      className="w-full max-w-md p-6 sm:p-8 bg-white rounded-xl shadow-md"
    >


      <h3 className="text-xl font-semibold text-gray-800 mb-1">
        Sign Up to Get Started
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        Let’s create your account. Please fill in your details below.
      </p>
    <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} /> 

      {/* Input Fields */}
      <div className="grid grid-cols-1 gap-4">
        <Input
          value={fullName}
          onChange={({ target }) => setFullName(target.value)}
          label="Full Name"
          placeholder="Enter your full name"
          type="text"
        />

        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email Address"
          placeholder="you@example.com"
          type="email"
        />

        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="Create a secure password"
          type="password"
        />

        <Input
          value={confirmPassword}
          onChange={({ target }) => setConfirmPassword(target.value)}
          label="Confirm Password"
          placeholder="Re-enter your password"
          type="password"
        />
      </div>

      {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:from-pink-600 hover:to-fuchsia-600 text-white text-sm py-2.5 font-semibold rounded-md transition mt-4"
      >
        Create Account
      </button>

      <p className="text-sm text-center text-gray-700 mt-3">
        Already have an account?{' '}
        <button
          type="button"
          className="font-medium text-violet-600 underline"
          onClick={() => setCurrentPage('login')}
        >
          Log In
        </button>
      </p>
    </form>
  );
};

export default SignUp;
