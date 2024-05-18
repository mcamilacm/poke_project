import { Link } from "react-router-dom";
import Pika2 from "../img/pikachu2.png";
const Hero =() =>
{
    return(
        <hero>

        <div className="containers_hero">
        <div className="main_title">

            <h1>FIND YOUR  POKÉMON PARTNER</h1>
          
          <Link to="/pokemones">
            <button>SEARCH</button>
            </Link>
        </div>

        <div className="image_hero">
        <img className="cake_img" src={Pika2} alt="cake" width="400px"/>
        </div>

        </div>

    </hero>


    )
}

export default Hero