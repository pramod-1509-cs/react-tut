import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import C1 from "./components/C1";
import dataArray from "./data/data_file1";
import Count from "./components/Count";
import Event from "./components/Event";
import Form from "./components/Form_validation";
import DataFetching from "./components/Data_fetch";

function App() {
  const handleCountChange = (count) => {
    // Do something with the count state outside the Count component
    console.log("Count changed:", count);
  };
  
  return (
    <>
      <h1>Hello this is Home</h1>
      <Form/>

     {/* <DataFetching/> */}
      {/* <Navbar
        image="url-to-image"
        alt="Card Image"
        title="Card Title 1"
        description="This is the description for Card 1."
      />
      <Navbar
        image="url-to-another-image"
        alt="Another Card Image"
        title="Card Title 2"
        description="This is the description for Card 2."
      />

      <h1>card data</h1>
      <ul>
        {dataArray.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>: {item.description}
          </li>
        ))}
      </ul>

      <Count/>
      <Count/>
      <Count onCountChange={handleCountChange} />

      <Event/> */}


     

      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/c1" element={<C1 />} />
      </Routes>
    </>
  );
}

export default App;
