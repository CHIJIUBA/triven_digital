import { useState } from 'react'

export default function PasswordField({ id, label, placeholder, helpText }) {
  const [visible, setVisible] = useState(false)

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label}</label>
      <div className="password-input-wrap">
        <input
          type={visible ? 'text' : 'password'}
          className="form-control"
          id={id}
          placeholder={placeholder}
          required
        />
        <button
          type="button"
          className="password-toggle"
          aria-label="Toggle password visibility"
          onClick={() => setVisible((v) => !v)}
        >
          <span className={visible ? 'icon-eye-off' : 'icon-eye'}></span>
        </button>
      </div>
      {helpText && <small className="form-text text-muted">{helpText}</small>}
    </div>
  )
}
