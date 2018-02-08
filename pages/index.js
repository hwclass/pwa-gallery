/* global window, document, navigator */

import * as React from 'react'
import Router from 'next/router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { namespaceConfig } from 'fast-redux'
import axios from 'axios'

import { activateState } from '../redux'

import Gallery from '../components/Gallery'
import Modal from '../components/Modal'

const DEFAULT_STATE = {
  build: 1
}

const { 
  action,
  getState: getIndexPageState
} = namespaceConfig('indexPage', DEFAULT_STATE)

const bumpBuild = action('bumpBuild',
  (state, increment) => ({
    ...state,
    build: state.build + increment
  })
)

class Index extends React.Component {
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
          // eslint-disable-next-line
          console.log('Service worker registration failed', err.message);
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
    const { url, data, build, bumpBuild } = this.props;
    return (
      <main className='content'>
        {
          url.query.photoUri &&
          <Modal uri={url.query.photoUri} title={data.title} onClose={() => this.constructor.closeModal()}/>
        }
        <Gallery images={data.images} title={data.title}/>
        <button onClick={() => bumpBuild(1)}>Bump Build</button>
        <div>{ build }</div>
        <style jsx>{`
          header {
            grid-area: main;
          }
        `}</style>
      </main>
    );
  }
}

function mapStateToProps (state) {
  return getIndexPageState(state)
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ bumpBuild }, dispatch)
}

export default activateState(connect(mapStateToProps, mapDispatchToProps)(Index))
