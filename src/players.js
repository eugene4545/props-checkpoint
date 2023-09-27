import Player from "./Player";

const players = [
    {
        name: "Kevin De bruyne",
        team: "Manchester City",
        nationality: "Belgium",
        jerseyNumber: "17",
        age: "32",
        imageURL: "/images/kevin-de-bruyne.webp"
    },
    {
        name: "Rodri",
        team: "Manchester City",
        nationality: "spain",
        jerseyNumber: "16",
        age: "27",
        imageURL: "/images/rodrigo.webp"
    },
    {
        name: "Erling Haaland",
        team: "Manchester City",
        nationality: "Norway",
        jerseyNumber: "9",
        age: "23",
        imageURL: "/images/erling-haaland.webp"
    },
    {
        name: "Ederson",
        team: "Manchester City",
        nationality: "Brazil",
        jerseyNumber: "31",
        age: "30",
        imageURL: "./images/ederson.webp"
    },
    {
        name: "Bernado Silva",
        team: "Manchester City",
        nationality: "Portugal",
        jerseyNumber: "20",
        age: "29",
        imageURL: "./images/bernardo-silva.webp"
    }
];

Player.defaultProps = {
    name: "Unknown",
    team: "Unknown",
    nationality: "Unknown",
    jerseyNumber: 0,
    age: 0,
    imageURL: "default.jpg",
};


export default players; 