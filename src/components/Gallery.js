import { useParams } from 'react-router-dom';
import guqinData from '../data/guqinData';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Gallery = () => {
    
    const guqin = guqinData();
    const { level } = useParams();
    console.log('path:', level);

      let filteredGuqinData;
      if (level === 'level_1'){
        filteredGuqinData = guqin.filter(item => item.category === 'level 1');
      }else if (level === 'level_2'){
        filteredGuqinData = guqin.filter(item => item.category === 'level 2');
      }else if (level === 'level_3'){
        filteredGuqinData = guqin.filter(item => item.category === 'level 3');
      }else if (level === 'level_all'){
        filteredGuqinData = guqin;
      }else {
        console.log('No data found');
        return null;
      }

      if (level === 'level_1' || level === 'level_2' || level === 'level_3' || level === 'level_all'){
        return (
          <div style={{display:"flex", justifyContent:"space-evenly", margin:"50px"}}>
            {filteredGuqinData.map(
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
    };

export default Gallery;