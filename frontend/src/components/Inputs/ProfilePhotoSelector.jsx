import React, { useRef, useState } from 'react';
import { FaUserAstronaut, FaTrashAlt, FaUpload } from 'react-icons/fa';

const ProfilePhotoSelector = ({ image, setImage, preview, setPreview }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
      if (setPreview) setPreview(preview);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
    if (setPreview) setPreview(null);
  };

  const onChooseFile = () => {
    inputRef.current?.click();
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />

      {!image ? (
        <div className="relative w-24 h-24 rounded-full bg-gradient-to-tr from-pink-600 to-fuchsia-400 flex items-center justify-center text-white shadow-md">
          <FaUserAstronaut className="text-4xl drop-shadow-md" />

          <button
            type="button"
            onClick={onChooseFile}
            className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tr from-pink-500 to-fuchsia-500 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition"
          >
            <FaUpload size={14} />
          </button>
        </div>
      ) : (
        <div className="relative w-24 h-24">
          <img
            src={preview || previewUrl}
            alt="Profile"
            className="w-full h-full object-cover rounded-full border-4 border-pink-300 shadow-md"
          />

          <button
            type="button"
            onClick={handleRemoveImage}
            className="absolute bottom-0 right-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center shadow hover:bg-red-600 transition"
          >
            <FaTrashAlt size={14} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoSelector;
