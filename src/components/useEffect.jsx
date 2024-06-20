import { useState , useEffect } from "react";
import { EffectPost, UploadForm } from "./Effect";


export const FormUseEffect = () => {
  const [counter, setCounter] = useState(0);
  const [sync , setSync] = useState(false);
  const [data , setData] = useState([{
    Id : 1,
    title: "",
    body : ""
  }]);

  useEffect(() => {
    console.log("Rendering.....");
    document.title = `React ${counter}`;
  } , [sync,counter]);

  // useeffect for fetching data
  useEffect(() => {
    const fetchData = async () => {
      const promisedData = await fetch("https://jsonplaceholder.typicode.com/posts");
      const parsedData = await promisedData.json();
      setData(parsedData);
      console.log(typeof parsedData.id);
    }
    fetchData();

    return () => {
      console.log("disconnect");
    }
  }, []);


  return (
    <div>
      <UploadForm />
      
      {data.map((data) => <> <EffectPost 
        key={data.id}
        title={data.title}
        body={data.body}
        userId={data.id}
        
      /> <br />
      </> )}

      <p>you clicked {counter} times</p>
      <button onClick={() => setCounter(count => count+1)}>ClickMe</button>
      <button onClick={() => setSync(state => !state)}>Sync</button>
    </div>
  );
};

