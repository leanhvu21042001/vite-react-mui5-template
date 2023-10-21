import Banner from "./components/Banner";
import OutstandingRealEstateProject from "./components/OutstandingRealEstateProject";
import RealEstateByLocation from "./components/RealEstateByLocation";
import RealEstateForYou from "./components/RealEstateForYou";

const Home = () => {
  return (
    <div id="home-page">
      <Banner />
      <RealEstateForYou />
      <OutstandingRealEstateProject />
      <RealEstateByLocation />
    </div>
  );
};

export default Home;
