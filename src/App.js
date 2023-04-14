import React from "react";
import "./App.css";
import Contactcard from "./component/Contactcard";
function App() {
  React.useEffect(
    ()=>{
      fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((data) => setresult(data.results))
    },[]
  );
  const [result, setresult] = React.useState([]);
 
  return (
    <div>
      {console.log(result)}
      {result.map((m,index) => (
        < Contactcard
          key={index}
          email={m.email}
          fname={m.name.first}
          name={m.name.last}
          age={m.dob.age}
          url={m.picture.large}
        />
      ))}
    </div>
  );
}

export default App;
