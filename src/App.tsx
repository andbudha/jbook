import * as esbuild from 'esbuild-wasm';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

function App() {
  const ref = useRef<any>();
  const [txtAreaValue, setTxtAreaValue] = useState('');
  const [resultedCode, setResultedCode] = useState('');

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: '../public/esbuild.wasm',
    });
  };

  useEffect(() => {
    startService();
  }, []);

  const valueCatchingHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTxtAreaValue(event.currentTarget.value);
  };

  const transpileHandler = () => {
    if (!ref.current) {
      return;
    }
    console.log(ref.current);
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
