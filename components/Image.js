// import {
//   IMAGE_SMALL_SIZE_PREFIX,
//   IMAGE_LARGE_SIZE_PREFIX
// } from '../constants/images'

export default class extends React.Component {
  render() {
    const { id, uri, title } = this.props
    return (
      <article>
        <picture key={id} className="pic">
          <source
            media="(min-width: 36em)"
            srcSet={`http://${uri}_27.jpg 1024w, http://${uri}_27.jpg 640w, http://${uri}$_27.jpg 320w`}
            sizes="33.3vw"
          />
          <source
            srcSet={`http://${uri}_27.jpg 2x, http://${uri}_2.jpg 1x`}
          />
          <img src={`http://${uri}_27.jpg`} />
          <style jsx>{`
            .pic {
              background: #FFF;
            }
            img, src {
              margin: 0 auto;
              display: block;
            }
          `}</style>
        </picture>
        <span className="title">
          {title}
          <style jsx>{`
            .title {
              display: block;
              text-align: center;
              font-size: 2.5vmin;
            }
            @media screen and (max-width: 400px) {
              .title {
                display: none;
              }
            }
          `}</style>
        </span>
      </article>
    );
  }
}
