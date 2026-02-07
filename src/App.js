import Header from "./Header";
import { voitures, categories } from "./data";
import Voiture from "./Voiture";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [car, setcar] = useState("");
  const [ctg,setCtg]=useState("all")




  const filtered = car === "" ? voitures : voitures.filter((v) => v.categorie === car);

  return (
    <div>
      
  <Header className="title"  title="liste des voitures" />
       
      
      <div style={{ display: "flex",justifyContent:"center", alignItems:"center", gap: 10, margin: "15px 0" }}>
          <button  onClick={()=>{ setCtg("all") }}  style={{ backgroundColor: "#2563eb" , fontSize: 13, borderRadius: 13, margin: "10px", padding: "10px 20px",  }}>
            all
          </button>
        {categories.map((preps, index) => (
          <button  key={index} onClick={()=>{ setCtg(preps) }}  style={{ backgroundColor: "#2563eb" , fontSize: 13, borderRadius: 13, margin: "10px", padding: "10px 20px",  }}>
            {preps}
          </button>
        ))}
      </div>

      
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        
        { ctg==="all"? filtered.map((v, i) => (
          <Voiture key={i} voiture={v} />
        ))
      :filtered.map((v, i) => (
         v.categorie===ctg?<Voiture key={i} voiture={v} />: <></>
        ))
      }
      </div>
    </div>
  );
}
