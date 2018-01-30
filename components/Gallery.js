import Router from 'next/router'
import uuid from 'uuid'

import Layout from './Layout';
import Image from './Image';

export default class extends React.Component {
  showPhoto(e, uri, title) {
    e.preventDefault()
    Router.push(`/?photoUri=${uri}`, `/photo?uri=${uri}&title=${title}`)
  }

  render() {
    const { images, title } = this.props;
    return (
      <Layout title="PWA Gallery" headerText="Car Photos">
        <div className="gallery">
          {images.map((image) =>
            <a
              key={uuid.v4()}
              className='photoLink'
              href={`/photo?id=${image.uri}`}
              onClick={(e) => this.showPhoto(e, image.uri, title)}
            >
              <Image id={uuid.v4()} key={uuid.v4()} uri={image.uri} title={title}/>
            </a>
          )}
          <style jsx>{`
            .gallery {
              display: flex;
              flex-wrap: wrap;
              flex-direction: row;
              display: -webkit-box;
              display: -moz-box;
              display: -ms-flexbox;
              display: -webkit-flex;
              align-items: center;
              justify-content: center;
            }
            .photoLink {
              padding: 30px;
              text-decoration: none;
              color: #000;
            }
            @media screen and (max-width: 400px) {
              .photoLink {
                padding: 0;
              }
            }
          `}</style>
        </div>
      </Layout>
    );
  }
}
