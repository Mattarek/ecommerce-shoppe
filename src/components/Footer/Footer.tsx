import { facebook, instagram, linkedin, twitter } from '@assets/index'
import './footer.scss'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_description">
        <div className="footer__menu">
          <p>CONTACT</p>
          <p>TERMS OF SERVICES</p>
          <p>SHIPPING AND RETURNS</p>
        </div>
        <div className="footer__copyright">
          <p>© 2021 Shelly. Terms of use and privacy policy.</p>
        </div>
      </div>
      <div className="footer_search">
        <div className="footer_input">
          <input
            className="newsletter__input"
            type="text"
            placeholder="Give an email, get the newsletter."
          />
        </div>
        <div className="footer__icons">
          <img src={linkedin} alt="Linkedin logo" />
          <img src={facebook} alt="Facebook logo" />
          <img src={instagram} alt="Instagram logo" />
          <img src={twitter} alt="Twitter logo" />
        </div>
      </div>
    </footer>
  )
}
