import Router from 'next/router'
import dynamic from 'next/dynamic'
import axios from 'axios'

import Gallery from '../components/Gallery'
import Modal from '../components/Modal'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  static async getInitialProps() {
    if (!process.browser) {
      const res = await axios.get(process.env.IMAGES_URL);
      return { data: res.data };
    } else {
      const data = JSON.parse(sessionStorage.getItem('data'));
      return { data };
    }
  }

  componentDidMount () {
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.onKeyDown)
  }

  onKeyDown (e) {
    if (!this.props.url.query.photoId) return
    if (e.keyCode === 27) {
      this.props.url.back()
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
      <main className='content'>
        {
          url.query.photoUri &&
          <Modal uri={url.query.photoUri} title={data.title} onClose={() => this.closeModal()}/>
        }
        <Gallery images={data.images} title={data.title}/>
        <style jsx>{`
          header {
            grid-area: main;
          }
        `}</style>
      </main>
    );
  }
}
