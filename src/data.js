import rjpg from "./lesimages/rjpg.png";
import vjpg from "./lesimages/vjpg.jpg";
import gjpg from "./lesimages/gjpg.webp";
import kjpg from "./lesimages/kjpg.jpg";
import bjpg from "./lesimages/bjpg.jpg";
 



export const voitures = [
  {
    titre: "Renault Twingo",
    categorie: "MINI-CITADINES",
    prix: "138000",
    photo:rjpg,
  },
  {
    titre: "Ford Kuga",
    categorie: "SUV",
    prix: "230000",
    photo:  kjpg,
  },
  {
    titre: "Peugeot 3008",
    categorie: "SUV",
    prix: "224000",
    photo:  bjpg,
  },
  {
    titre: "Peugeot 208",
    categorie: "COMPACT",
    prix: "112900",
    photo: gjpg,
  },
  {
    titre: "Hyundai i20",
    categorie: "COMPACT",
    prix: "90000",
    photo: vjpg,
  },
  {
    titre: "Renault Clio",
    categorie: "COMPACT",
    prix: "115000",
    photo: bjpg,
  },
  {
    titre: "Fiat 500",
    categorie: "MINI-CITADINES",
    prix: "140000",
    photo: bjpg,
  },
];

export const categories = ["MINI-CITADINES", "SUV", "COMPACT"];
