import Router from 'next/router'
import uuid from 'uuid'

import Layout from './Layout';
import Image from './Image';

// import { TITLE } from '../constants/app'

export default class extends React.Component {
  showPhoto(e, uri) {
    e.preventDefault()
    Router.push(`/?photoUri=${uri}`, `/photo?uri=${uri}`)
  }

  render() {
    const { images } = this.props;
    return (
      <Layout title="PWA Gallery">
        <div>
          {images.map((image) =>
              <a
                key={uuid.v4()}
                className='photoLink'
                href={`/photo?id=${image.uri}`}
                onClick={(e) => this.showPhoto(e, image.uri)}
              >
                <Image id={uuid.v4()} key={uuid.v4()} uri={image.uri}/>
              </a>
            )
          }
          <style jsx>{`
            display: flex;
            height: 100%;
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            align-items: center;
            justify-content: center;
          `}</style>
        </div>
      </Layout>
    );
  }
}
