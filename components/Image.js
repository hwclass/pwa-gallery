import {
  IMAGE_SMALL_SIZE_PREFIX,
  IMAGE_LARGE_SIZE_PREFIX
} from '../constants/images'

export default class extends React.Component {
  render() {
    const { id, uri } = this.props
    return (
      <picture key={id} className="image">
        <source
          media="(min-width: 36em)"
          srcSet={`http://${uri}${IMAGE_LARGE_SIZE_PREFIX}.jpg 1024w, http://${uri}${IMAGE_SMALL_SIZE_PREFIX}.jpg 640w, http://${uri}${IMAGE_SMALL_SIZE_PREFIX}.jpg 320w`}
          sizes="33.3vw"
        />
        <source
          srcSet={`http://${uri}${IMAGE_SMALL_SIZE_PREFIX}.jpg 2x, http://${uri}${IMAGE_SMALL_SIZE_PREFIX}.jpg 1x`}
        />
        <img src={`http://${uri}${IMAGE_SMALL_SIZE_PREFIX}.jpg`} />
        <style jsx>{`
          .image {
             background: #FFF;
          }
        `}</style>
      </picture>
    );
  }
}
