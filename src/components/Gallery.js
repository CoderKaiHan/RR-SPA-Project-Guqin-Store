import guqinData from '../data/guqinData';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Gallery = () => {
    
    const data = guqinData();

    return (
      <div style={{display:"flex", justifyContent:"space-evenly", margin:"50px"}}>
        {data.map(
          (item)=> {
            return (
              <Card style={{ width: '18em',height:"25em", textAlign: 'left' }}>
            <Card.Img variant="top" src={item.img1} style={{width:"100%", height:"50%"}}/>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
              <Button variant="primary" style={{margin:"10px"}}>See details</Button>
              <Button variant="success" style={{margin:"10px"}}>Add to cart</Button>
            </Card.Body>
          </Card>
            )
          }
        )};
      </div>
    );
}

export default Gallery;