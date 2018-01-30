export default class extends React.Component {
  onClose(e) {
    this.props.onClose()
  }

  render() {
    const { id, uri, title } = this.props
    return (
      <div className='frame' onClick={(e) => this.onClose(e)}>
        <span className="title">
          {title}
          <a href="#" className="closeIcon"/>
        </span>
        <picture key={id} className="pic">
          <img src={`http://${uri}_27.jpg`} />
        </picture>
        <style jsx>{`
          .frame {
            position: fixed;
            background: rgba(0,0,0,1);
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
          }
          .title {
            display: block;
            max-width: 100%;
            padding: 15px;
            text-align: center;
            font-size: 2.5vmin;
            background: #000;
            color: #FFF;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          @media screen and (max-width: 400px) {
            .title {
              font-size: 2.5vmax;
            }
          }
          .closeIcon {
            position: absolute;
            right: 20px;
            top: 8px;
            width: 22px;
            height: 22px;
            opacity: 1;
          }
          @media screen and (max-width: 400px) {
            .closeIcon {
              max-width: 100%;
              top: 9px;
              width: 21px;
              height: 5px;
            }
          }
          .closeIcon:before, .closeIcon:after {
            position: absolute;
            left: 15px;
            content: ' ';
            height: 33px;
            width: 2px;
            background-color: #333;
          }
          .closeIcon:before {
            transform: rotate(45deg);
          }
          .closeIcon:after {
            transform: rotate(-45deg);
          }
          .pic {
            position: absolute;
            margin: 0 auto;
            display: block;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 50%;
            padding: 20px; 
          }
          @media screen and (max-width: 400px) {
            .pic {
              padding: 0;
              width: 100%;
            }
          }
          img {
            display: block;
            margin: auto;
            width: 100%;
          }
          @media screen and (max-width: 400px) {
            img {
              width: 100%;
            }
          }
        `}</style>
      </div>
    );
  }
}