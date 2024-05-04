import About from "./About/About";
import Banner from "./Banner";
import ProductSale from "./ProductSale/ProductSale";
import Services from "./Services/Services";
import Team from "./Team/Team";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <ProductSale></ProductSale>
      <Team></Team>
    </div>
  );
};

export default Home;
