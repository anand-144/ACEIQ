import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const Input = ({ value, onChange, placeholder, type = 'text', label }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-white border border-gray-300 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 rounded-md px-4 py-2 text-sm text-gray-800 placeholder:text-gray-400 pr-10 outline-none"
        />
        {isPassword && (
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FaRegEye size={18} className="text-pink-600" />
            ) : (
              <FaRegEyeSlash size={18} className="text-slate-600" />
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
