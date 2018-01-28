export default class extends React.Component {
  render() {
    return (
      <footer>
        Footer
        <style jsx>{`
          footer {
            grid-area: ft;
            height: 50px;
            background: blue;
            color: #FFF;
            text-align: center;
            line-height: 50px;
          }
        `}</style>
      </footer>
    );
  }
}
