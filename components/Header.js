export default class extends React.Component {
  render() {
    return (
      <header>
        Header
        <style jsx>{`
          header {
            grid-area: hd;
          }
        `}</style>
      </header>
    )
  }
}