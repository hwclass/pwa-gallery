import Layout from './Layout';

export default class extends React.Component {
  render() {
    const { id, uri, title } = this.props
    return (
      <Layout title={`PWA Gallery - ${title}`} headerText="Photo">
        <article>
          <span className="title">
            {title}
            <a href="#" className="closeIcon"/>
            <style jsx>{`
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
            `}</style>
          </span>
          <picture key={id} className="pic">
            {/*<source
              media="(min-width: 36em)"
              srcSet={`http://${uri}_27.jpg 1024w, http://${uri}_27.jpg 640w, http://${uri}$_27.jpg 320w`}
              sizes="33.3vw"
            />
            <source
              srcSet={`http://${uri}_27.jpg 2x, http://${uri}_2.jpg 1x`}
            />*/}
            <img src={`http://${uri}_27.jpg`} />
            <style jsx>{`
              .pic {
                background: #FFF;
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
          </picture>
        </article>
      </Layout>
    );
  }
}
