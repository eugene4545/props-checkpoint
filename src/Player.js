import Card from "react-bootstrap/Card";



const Player =({ name, team, nationality, jerseyNumber, age, imageURL}) => {
    return(
    
    <Card style={{ width: '18rem' }}>
    <Card.Img className="card-img" style={{width:'120px'}} variant="top" src={imageURL} />              

    <Card.Body className="card" style={{color: 'white'}}>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Team: {team}</Card.Text>
        <Card.Text>Nationality: {nationality}</Card.Text>
        <Card.Text>jerseyNumber: {jerseyNumber}</Card.Text>
        <Card.Text>Age: {age}</Card.Text>
    </Card.Body>
    </Card>
    )
}

export default Player;
