
export default function Voiture({voiture}){
    return(
        <div>
            <h1>{voiture.photo}</h1>
            <h3>{voiture.titre}</h3>
            <p>{voiture.categorie}</p>
            <p>{voiture.prix}</p>
        </div>
    )
}