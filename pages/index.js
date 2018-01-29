import Router from 'next/router'
import axios from 'axios';

import Layout from '../components/Layout';
import Gallery from '../components/Gallery';
import Modal from '../components/Modal';

// import { IMAGES_URL } from '../constants/images'

export default class extends React.Component {
  static async getInitialProps() {
    if (!process.browser) {
      const res = await axios.get('https://www.mobile.de/hiring-challenge.json');
      return { data: res.data };
    } else {
      const data = JSON.parse(sessionStorage.getItem('data'));
      return { data };
    }
  }

  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('service worker registration successful');
        })
        .catch(err => {
          console.warn('service worker registration failed', err.message);
        });
    }

    if (!sessionStorage.getItem('data'))
      sessionStorage.setItem('data', JSON.stringify(this.props.data));
  }

  closeModal() {
    Router.push('/')
  }

  render() {
    const { url, data } = this.props;
    return (
      <main>
        {
          url.query.photoUri &&
          <Modal uri={url.query.photoUri} onClose={() => this.closeModal()}/>
        }
        <Gallery images={data.images} />
        <style jsx>{`
          header {
            grid-area: main;
          }
        `}</style>
      </main>
    );
  }
}
