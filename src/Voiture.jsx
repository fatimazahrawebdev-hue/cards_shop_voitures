
export default function Voiture({voiture}){
    return(
        <div>
            <img src={voiture.photo} style={{ width: "250px", height: "180px", objectFit: "cover", borderRadius: "10px" }} />
            <h3>{voiture.titre}</h3>
            <p>{voiture.categorie}</p>
            <p>{voiture.prix}</p>
        </div>
    )
}