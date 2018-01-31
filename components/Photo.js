import React from 'react'
import Layout from './Layout';

export default class extends React.Component {
  render() {
    const { id, uri, title } = this.props
    return (
      <Layout title={`${process.env.TITLE} - ${title}`} headerText={`${process.env.PHOTO_TITLE}`}>
        <article>
          <span className="title">
            {title}
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
            <img src={`http://${uri}${process.env.IMAGE_LARGE_SIZE_SUFFIX}.jpg`}/>
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
