/* global window, document, navigator */

import * as React from 'react'
import Router from 'next/router'
import axios from 'axios'

import Gallery from '../components/Gallery'
import Modal from '../components/Modal'

export default class extends React.Component {
  static async getInitialProps() {
    if (!process.browser) {
      const res = await axios.get(process.env.IMAGES_URL);
      return { data: res.data };
    }

    const data = JSON.parse(window.sessionStorage.getItem('data'));
    return { data };
  }

  static closeModal() {
    Router.push('/')
  }

  constructor(props) {
    super(props)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown)
    
    if ('serviceWorker' in navigator) {
      /* eslint no-unused-vars: 0 */
      navigator.serviceWorker
        .register('/service-worker.js')
        .then()
        .catch(err => {
          console.warn('Service worker registration failed', err.message);
        });
      /* eslint no-unused-vars: 1 */
    }

    if (!window.sessionStorage.getItem('data'))
      window.sessionStorage.setItem('data', JSON.stringify(this.props.data));
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

  render() {
    const { url, data } = this.props;
    return (
      <main className='content'>
        {
          url.query.photoUri &&
          <Modal uri={url.query.photoUri} title={data.title} onClose={() => this.constructor.closeModal()}/>
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
