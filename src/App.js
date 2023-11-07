import axios from "axios";

import Card from "./components/card/Card";
import { useEffect, useState } from "react";
import Altcard from "./components/card/Altcard";


function App() {
  const [data, setData] = useState([]);
  const [err, setErr] = useState([]);

  const url =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=5d81d2be9f3c49c0b3d04e252a218b5e";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.articles);
        setData(res.data.articles);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="App">
     
 
      {data.map((e, index) => {
        return (
          <>
            {index % 2 == 0 && (
              <Card
                key={index}
                urlToImage={e.urlToImage}
                author={e.author}
                publishedAt={e.publishedAt}
                title={e.title}
                description={e.description}
                content={e.content}
                url={e.url}
              />
            )}

            {index % 2 == 1 && (
              <Altcard
                key={index}
                urlToImage={e.urlToImage}
                author={e.author}
                publishedAt={e.publishedAt}
                title={e.title}
                description={e.description}
                content={e.content}
                url={e.url}
              />
            )}
          </>
        );
      })}

      {/* <Card />
      <Card /> */}
    </div>
  );
}

export default App;
