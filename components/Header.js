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
