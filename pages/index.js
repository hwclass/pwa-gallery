import 'isomorphic-fetch'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Gallery from '../components/Gallery'

export default class extends React.PureComponent {
  componentDidMount () {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('service worker registration successful')
        })
        .catch(err => {
          console.warn('service worker registration failed', err.message)
        })
    }
  }

  render() {
    return (
      <Layout title="PWA GAllery">
        <Header/>
        <main>
          <Gallery/>
        </main>
      </Layout>
    )
  }
}