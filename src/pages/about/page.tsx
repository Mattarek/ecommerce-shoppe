import { producedWithCare, topTrends } from '@assets/about'
import './about.scss'

export const About = () => {
  return (
    <div className="ourStory">
      <div className="ourStory__item">
        <h2>About</h2>
        <p>Who we are and why we do what we do!</p>
        <p>
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a,
          gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac
          urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat
          tortor lacus, ac sodales lectus placerat quis.
        </p>
      </div>
      <div className="ourStory__item">
        <h3>Top trends</h3>
        <img src={topTrends} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a
          volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis
          mauris eget arcu facilisis consequat sed eu felis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a
          volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis
          mauris eget arcu facilisis consequat sed eu felis.
        </p>
        <ul className="ourStory__item-list">
          <li>● consectetur adipiscing elit. Aliquam placerat</li>
          <li>● Lorem ipsum dolor sit amet consectetur </li>
        </ul>
      </div>
      <div className="ourStory__item">
        <h3>Produced with care</h3>
        <img src={producedWithCare} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a
          volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis
          mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta
          tempor odio, in molestie diam bibendu.
        </p>
      </div>
    </div>
  )
}
