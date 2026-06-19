import { useUI } from '../UIContext.jsx'
import SocialAuthButtons from './SocialAuthButtons.jsx'
import PasswordField from './PasswordField.jsx'

export default function AuthModal() {
  const { authOpen, setAuthOpen, authView, setAuthView } = useUI()

  if (!authOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    // Wire this up to your auth provider of choice.
    setAuthOpen(false)
  }

  return (
    <>
      <div
        className="modal fade show"
        id="authModal"
        tabIndex="-1"
        aria-labelledby="authModalLabel"
        aria-hidden="false"
        style={{ display: 'block' }}
        onClick={(e) => {
          if (e.target.classList.contains('modal')) setAuthOpen(false)
        }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content auth-modal">
            <button
              type="button"
              className="btn-close auth-modal-close"
              aria-label="Close"
              onClick={() => setAuthOpen(false)}
            ></button>

            {authView === 'signin' ? (
              <div className="auth-form-container" id="signInForm">
                <div className="auth-header">
                  <h2 id="authModalLabel">Welcome Back</h2>
                  <p>Sign in to your account to continue</p>
                </div>

                <SocialAuthButtons />

                <div className="auth-divider">
                  <span>or</span>
                </div>

                <form className="auth-form" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="signInEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="signInEmail" placeholder="you@example.com" required />
                  </div>
                  <PasswordField id="signInPassword" label="Password" placeholder="Enter your password" />
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="rememberMe" />
                      <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                    </div>
                    <a href="#" className="auth-link">Forgot password?</a>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Sign In</button>
                </form>

                <p className="auth-switch">
                  Don't have an account?{' '}
                  <a href="#" className="auth-link" onClick={(e) => { e.preventDefault(); setAuthView('register') }}>
                    Sign up
                  </a>
                </p>
              </div>
            ) : (
              <div className="auth-form-container" id="registerForm">
                <div className="auth-header">
                  <h2>Create Account</h2>
                  <p>Get started with your free account</p>
                </div>

                <SocialAuthButtons />

                <div className="auth-divider">
                  <span>or</span>
                </div>

                <form className="auth-form" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="registerName" className="form-label">Full name</label>
                    <input type="text" className="form-control" id="registerName" placeholder="John Doe" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="registerEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="registerEmail" placeholder="you@example.com" required />
                  </div>
                  <PasswordField
                    id="registerPassword"
                    label="Password"
                    placeholder="Create a password"
                    helpText="Must be at least 8 characters"
                  />
                  <PasswordField
                    id="registerConfirmPassword"
                    label="Confirm password"
                    placeholder="Confirm your password"
                  />
                  <div className="form-check mb-4">
                    <input type="checkbox" className="form-check-input" id="agreeTerms" required />
                    <label className="form-check-label" htmlFor="agreeTerms">
                      I agree to the <a href="#" className="auth-link">Terms of Service</a> and{' '}
                      <a href="#" className="auth-link">Privacy Policy</a>
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Create Account</button>
                </form>

                <p className="auth-switch">
                  Already have an account?{' '}
                  <a href="#" className="auth-link" onClick={(e) => { e.preventDefault(); setAuthView('signin') }}>
                    Sign in
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" onClick={() => setAuthOpen(false)}></div>
    </>
  )
}
