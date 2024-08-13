import { xIconForInput } from '@assets/index'
import './ResetPassword.scss'

export const ResetPassword = () => {
  return (
    <div className="resetPassword">
      <h2 className="resetPassword__header">Lost password</h2>
      <p className="resetPassword__paragraph">
        If you've forgotten your password, enter your e-mail address and we'll send you an e-mail
      </p>
      <input className="resetPassword__input" type="text" placeholder="Email" />
      <img className="resetPassword__img" src={xIconForInput} alt="Delete input text icon" />
      <button className="resetPassword__button">RESET PASSWORD</button>
    </div>
  )
}
