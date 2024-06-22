import { useState, useEffect } from "react";
import { EffectPost, UploadForm } from "./Effect";

export const FormUseEffect = () => {
  const [counter, setCounter] = useState(0);
  const [sync, setSync] = useState(false);
  const [data, setData] = useState([{
      Id: 1,
      title: "",
      body: "",
    }
  ]);

  useEffect(() => {
    console.log("Rendering.....");
    document.title = `React ${counter}`;
  }, [sync, counter]);

  // useEffect for fetching data
  useEffect(() => {
    const controller = new AbortController(); // allows you to abort one or more DOM requests
    const fetchData = async () => {
      try {
        const promisedData = await fetch(
          "https://jsonplaceholder.typicode.com/posts",{
            signal: controller.signal, // Returns the AbortSignal object associated with this object.
          }
        );

        const parsedData = await promisedData.json();
        setData(parsedData);
        console.log(controller.signal);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    return () => {
      // Invoking this method will set this object's AbortSignal's
      // aborted flag and signal to any observers that the associated activity is to be aborted.

      controller.abort("Aborted due to untracked reason");
    };
  }, []);

  return (
    <div>
      <UploadForm />
      <br />

      {data.map((data) => (
        <>
          <EffectPost
            key={data.id}
            title={data.title}
            body={data.body}
            userId={data.id}
          />
          <br />
        </>
      ))}

      <p>you clicked {counter} times</p>
      <button onClick={() => setCounter((count) => count + 1)}>ClickMe</button>
      <button onClick={() => setSync((state) => !state)}>Sync</button>
    </div>
  );
};
