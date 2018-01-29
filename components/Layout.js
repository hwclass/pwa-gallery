import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default class extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="theme-color" content="#ff6600" />
          <link rel="apple-touch-icon" href="/static/icon.png" />
          <meta name="apple-mobile-web-app-title" content="PWA Gallery" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
        </Head>
        <Header />
        {this.props.children}
        <Footer />
        <style jsx global>{`
          body {
            background: #fff;
            font: 11px Helvetica;
            font-size: 18px;
            padding: 0;
            margin: 0;
          }
        `}</style>
        <style jsx>{`
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          grid-auto-rows: minmax(100px, auto);
          grid-template-areas:
            'hd'
            'main'
            'ft';
        `}</style>
      </div>
    );
  }
}
