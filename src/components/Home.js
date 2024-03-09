import Navigation from "./Navbar";
import backgroundImage from '../assets/294182684_10227224919638298_2707717197678350171_n.jpg';

const Home = () => {

    const style ={
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <div style={style}>
          <Navigation />
        </div>
    );
}

export default Home;