
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
function CardComp(props){
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
          <Button variant="primary" as={Link} to={`/${props.entity}/${props.id}`}>Info</Button>
        </Card.Body>
      </Card>
    )
}

export default CardComp