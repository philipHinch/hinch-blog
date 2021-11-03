import './Home.css';
import '../hooks/useFetch';
import { useFetch } from '../hooks/useFetch';
import Blog from './Blog';


const Home = () => {

    const { data, isPending, error } = useFetch('http://localhost:3000/blogs')

    return (

        <div className="home-container">
            <h2 className="home-title">Home</h2>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <Blog blogs={data} />}
        </div>

    );
}

export default Home;