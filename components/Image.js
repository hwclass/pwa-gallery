export default class extends React.Component {
  render() {
    const { id, uri, title } = this.props
    return (
      <article>
        <picture key={id} className="pic">
          <source
            media="(min-width: 36em)"
            srcSet={`http://${uri}${process.env.IMAGE_LARGE_SIZE_SUFFIX}.jpg 1024w, http://${uri}${process.env.IMAGE_LARGE_SIZE_SUFFIX}.jpg 640w, http://${uri}${process.env.IMAGE_LARGE_SIZE_SUFFIX}.jpg 320w`}
            sizes="33.3vw"
          />
          <source
            srcSet={`http://${uri}${process.env.IMAGE_LARGE_SIZE_SUFFIX}.jpg 2x, http://${uri}${process.env.IMAGE_SMALL_SIZE_SUFFIX}.jpg 1x`}
          />
          <img src={`http://${uri}${process.env.IMAGE_LARGE_SIZE_SUFFIX}.jpg`} />
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
