import Banner from "./components/Banner";
import OutstandingRealEstateProject from "./components/OutstandingRealEstateProject";
import RealEstateForYou from "./components/RealEstateForYou";

const Home = () => {
  return (
    <div id="home-page">
      <Banner />
      <RealEstateForYou />
      <OutstandingRealEstateProject />
    </div>
  );
};

export default Home;
