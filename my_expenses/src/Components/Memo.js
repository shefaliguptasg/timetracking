const Tile = React.memo(() => {
    let eventUpdates = React.useRef(0);
    return (
      <div className="black-tile">
        <div> Input : {eventUpdates.current++} </div>
      </div>
    );
  });

  const App = () => {
    const updates = React.useRef(0);
    const [text, setText] = React.useState('');
    const data = { test: 'data' };
  
    return (
      <div className="app">
        <div className="blue-wrapper">
          <input
            value={text}
            placeholder="Write something"
            onChange={(e) => setText(e.target.value)}
          />
          <div> Input : {updates.current++} </div>
          <Tile />
          <TileMemo data={data} />
        </div>
      </div>
    );
  };