export default class extends React.Component {
  onClose(e) {
    this.props.onClose()
  }

  render() {
    const { id, uri } = this.props
    return (
      <div className='frame' onClick={(e) => this.onClose(e)}>
        <picture key={id} className="image">
          <source
            media="(min-width: 36em)"
            srcSet={`http://${uri}_27.jpg 1024w, http://${
              uri
            }_2.jpg 640w, http://${uri}_2.jpg 320w`}
            sizes="33.3vw"
          />
          <source
            srcSet={`http://${uri}_2.jpg 2x, http://${
              uri
            }_2.jpg 1x`}
          />
          <img src="small.jpg" alt="A rad wolf" />
        </picture>
        <style jsx>{`
          .frame {
            position: fixed;
            background: rgba(0,0,0,.65);
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
          }
          .image {
            position: absolute;
            top: 50%;
            width: 100%;
            margin-top: -250px;
          }
        `}</style>
      </div>
    );
  }
}