import { arrow, facebook, instagram, lineFooter, linkedin, twitter } from '@assets/index'
import { NavLink } from 'react-router-dom'
import './footer.scss'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__mobile">
        <div className="footer__input">
          <input
            type="text"
            className="footer__input-field"
            placeholder="Give an email, get the newsletter."
          />
          <img src={arrow} alt="Arrow from input" className="footer__input-arrow" />
        </div>
        <div className="footer__checkbox">
          <input type="checkbox" />
          <p className="footer__checkbox-description">
            I agree to the website's terms and conditions
          </p>
        </div>
        <div className="footer__contact">
          <NavLink className="footer__contact-items" to="/contact">
            CONTACT
          </NavLink>
          <NavLink className="footer__contact-items" to="/services">
            TERMS OF SERVICES
          </NavLink>
          <NavLink className="footer__contact-items" to="/returns">
            SHIPPING AND RETURNS
          </NavLink>
        </div>
        <div className="footer__socials">
          <p>Follow us</p>
          <img src={lineFooter} alt="Footer line" />
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
        </div>
        <div className="footer__copyright">
          <div>© 2024 Shelly. Terms of use and privacy policy.</div>
        </div>
      </div>
      <div className="footer__desktop">
        <div className="footer__desktop-left">
          <div className="footer__contact">
            <NavLink className="footer__contact-items" to="/contact">
              CONTACT
            </NavLink>
            <NavLink className="footer__contact-items" to="/services">
              TERMS OF SERVICES
            </NavLink>
            <NavLink className="footer__contact-items" to="/returns">
              SHIPPING AND RETURNS
            </NavLink>
          </div>
          <div>
            <div className="footer__copyright">© 2024 Shelly. Terms of use and privacy policy.</div>
          </div>
        </div>
        <div className="footer__desktop-right">
          <div className="footer__input">
            <input
              type="text"
              className="footer__input-field"
              placeholder="Give an email, get the newsletter."
            />
            <img src={arrow} alt="Arrow from input" className="footer__input-arrow" />
          </div>
          <div className="footer__socials">
            <div className="footer__socials-position">
              <img src={linkedin} alt="Linkedin logo" />
              <img src={facebook} alt="Facebook logo" />
              <img src={instagram} alt="Instagram logo" />
              <img src={twitter} alt="Twitter logo" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
