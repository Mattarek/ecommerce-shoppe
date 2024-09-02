import { SearchBar } from '@components/SearchBar'
import './privacy.scss'

export const Privacy = () => {
  return (
    <div>
      <SearchBar />
      <div className="privacy">
        <div className="privacy__container">
          <div className="privacy__container-item">
            <h2 className="privacy__header">Privacy Policy</h2>
            <p className="privacy__description">
              Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a,
              gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam
              ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin
              placerat tortor lacus, ac sodales lectus placerat quis.{' '}
            </p>
          </div>
          <div className="privacy__container-item">
            <h3 className="privacy__h3">Security</h3>
            <p className="privacy__description">
              Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a,
              gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque.
            </p>
          </div>
          <div className="privacy__container-item">
            <h3 className="privacy__h3">Cookies</h3>
            <ul className="privacy__list">
              <li className="privacy__item">
                ● Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante
                a, gravida arcume
              </li>
              <li className="privacy__item">
                ● Nam fringilla molestie velit, eget pellentesque risus scelerisque
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
