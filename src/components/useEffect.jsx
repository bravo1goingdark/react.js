import { useState , useEffect } from "react";


export const FormUseEffect = () => {
  const [counter, setCounter] = useState(0);
  const [sync , setSync] = useState(false);

  useEffect(() => {
    console.log("Rendering.....")
    document.title = `React ${counter}`
  } , [sync , counter])

  


  return (
    <div>
      <p>you clicked {counter} times</p>
      <button onClick={() => setCounter(count => count+1)}>ClickMe</button>
      <button onClick={() => setSync(state => !state)}>Sync</button>
    </div>
  );
};

