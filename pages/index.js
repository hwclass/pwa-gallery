import Router from 'next/router'
import dynamic from 'next/dynamic'
import axios from 'axios';

import Layout from '../components/Layout';
import Gallery from '../components/Gallery';
import Modal from '../components/Modal';

const GalleryWithDynamicLoading = dynamic(
  import('../components/Gallery'), {
    loading: () => <p>The Gallery is loading...</p>
  }
)

export default class extends React.Component {
  static async getInitialProps() {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
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
          <Modal uri={url.query.photoUri} title={data.title} onClose={() => this.closeModal()}/>
        }
        <GalleryWithDynamicLoading images={data.images} title={data.title}/>
        <style jsx>{`
          header {
            grid-area: main;
          }
        `}</style>
      </main>
    );
  }
}
