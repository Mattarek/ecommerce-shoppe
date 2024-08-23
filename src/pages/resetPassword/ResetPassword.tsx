import { xIconForInput } from '@assets/index'
import './resetPassword.scss'

export const ResetPassword = () => {
  return (
    <div className="resetPassword">
      <h2 className="resetPassword__header">Lost password</h2>
      <p className="resetPassword__paragraph">
        If you've forgotten your password, enter your e-mail address and we'll send you an e-mail
      </p>

      <div className="resetPassword__container-input">
        <input className="resetPassword__input" type="text" placeholder="Email" />
        <button className="resetPassword__clearButton">
          <img className="resetPassword__img" src={xIconForInput} alt="Delete input text icon" />
        </button>
      </div>

      <button className="resetPassword__button">RESET PASSWORD</button>
    </div>
  )
}
