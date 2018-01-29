// import {
//   IMAGE_SMALL_SIZE_PREFIX,
//   IMAGE_LARGE_SIZE_PREFIX
// } from '../constants/images'

export default class extends React.Component {
  render() {
    const { id, uri } = this.props
    return (
      <picture key={id} className="image">
        <source
          media="(min-width: 36em)"
          srcSet={`http://${uri}_27.jpg 1024w, http://${uri}_2.jpg 640w, http://${uri}$_2.jpg 320w`}
          sizes="33.3vw"
        />
        <source
          srcSet={`http://${uri}_2.jpg 2x, http://${uri}_2.jpg 1x`}
        />
        <img src={`http://${uri}_2.jpg`} />
        <style jsx>{`
          .image {
             background: #FFF;
          }
        `}</style>
      </picture>
    );
  }
}
