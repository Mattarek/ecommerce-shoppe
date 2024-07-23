import { facebook, instagram, linkedin, twitter } from '@assets/index'
import './footer.scss'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__description">
        <div className="footer__menu">
          <p className="footer__item">CONTACT</p>
          <p className="footer__item">TERMS OF SERVICES</p>
          <p className="footer__item">SHIPPING AND RETURNS</p>
        </div>
        <div className="footer__copyright">
          <p>© 2021 Shelly. Terms of use and privacy policy.</p>
        </div>
      </div>
      <div className="footer__search">
        <div className="footer__input">
          <input
            className="footer__newsletter-input"
            type="text"
            placeholder="Give an email, get the newsletter."
          />
        </div>
        <div className="footer__icons">
          <div className="footer__icons-container">
            <img src={linkedin} alt="Linkedin logo" />
            <img src={facebook} alt="Facebook logo" />
            <img src={instagram} alt="Instagram logo" />
            <img src={twitter} alt="Twitter logo" />
          </div>
        </div>
      </div>
    </footer>
  )
}
