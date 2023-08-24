import Content from "./Component/Content";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import Menu from "./Component/Menu";


const App = () => {
  return (
    <div>
    <Header></Header>
    <hr></hr>
    <Hero></Hero>
    <hr></hr>
    <Menu></Menu>
    <hr></hr>
    <Content></Content>
    <hr></hr>
    <Footer></Footer>
    <hr></hr>
    </div>
  );
};

export default App;