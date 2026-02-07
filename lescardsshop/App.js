import Header from "./Header";
import { voitures } from "./data";
import Voiture from "./Voiture";
import { categories } from "./data";
import "./App.css"
import { useState } from "react";

export default function App() {
  const [car,setcare]=useState("0")
  return (
    <div >
       <Header title="liste des voitures" />

          {categories.map((preps,index)=>
             <button  style={{ backgroundColor: "blue", fontSize: 13,borderRadius: 13 , margin: "10px", padding: "10px 20px", }}  key={index}>{preps}</button>
          )}

          {voitures.filter((id)=>(id.categorie)===setcare)}

              {voitures.map((s,c)=>
                <p key={c}>{s.voitures}</p>
              )}
       <Voiture     voiture={voitures} />
           
    </div>
  );
}

