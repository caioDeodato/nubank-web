import React, { useState } from 'react';
import '../../global/styles.scss';
import './styles.scss';

import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

export default function PasswordInput() {
  const [visible, setVisible] = useState(false);

  function handleVisibility() {
    setVisible(!visible);
  }

  return (
    <div className="password-container">
      <input type={visible ? "text" : "password"} placeholder="Senha" name="password" id="pass" />
      <button className="eye" type="button" onClick={handleVisibility}>
        {visible ? (
          <FaRegEyeSlash size={18} color="#530082" />
        ) : (
          <FaRegEye color="#530082" size={18} />
        )}
      </button>
    </div>
  );
}
