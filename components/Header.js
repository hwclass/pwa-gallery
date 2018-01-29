import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = (url) => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()

Router.onRouteChangeError = () => NProgress.done()

export default class extends React.Component {
  render() {
    return (
      <header>
        Car Photos
        <style jsx>{`
          header {
            grid-area: hd;
            height: 50px;
            background: blue;
            color: #FFF;
            text-align: center;
            line-height: 50px;
          }
        `}</style>
      </header>
    );
  }
}
