import React, { ChangeEvent, useState } from 'react';

function App() {
  const [txtAreaValue, setTxtAreaValue] = useState('');
  const [resultedCode, setResultedCode] = useState('');

  const valueCatchingHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTxtAreaValue(event.currentTarget.value);
  };

  const transpileHandler = () => {
    setResultedCode(txtAreaValue);
  };
  return (
    <div className="App">
      <div>
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          value={txtAreaValue}
          onChange={valueCatchingHandler}
        ></textarea>
      </div>
      <button onClick={transpileHandler}>Submit</button>
      <div>
        <pre>{resultedCode}</pre>
      </div>
    </div>
  );
}

export default App;
