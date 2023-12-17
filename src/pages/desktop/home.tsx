import {Link} from "react-router-dom";

const Home = () => {

  return (
      <div className={`absolute top-[200px]`}>
        Home Page desktop
          <Link to={'about'} className={`underline`}>About</Link>
          <button className={`flex mt-10 bg-gray-50 m-10 p-5`}>load component</button>
      </div>
  );
};

export default Home;