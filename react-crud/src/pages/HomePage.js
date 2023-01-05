// Component Imports
import Footer from "../components/Footer"
import Header from "../components/Header";
import HeroWrapper from "../components/HeroWrapper";
// Modal Imports
import LoginModal from "../modals/LoginModal";
import RegisterModal from "../modals/RegisterModal";

function HomePage(props) {

  return (
    <>
      <LoginModal setIsLoggedIn={props.setIsLoggedIn} isLoggedIn={props.isLoggedIn} setAccessToken={props.setAccessToken}/>
      <RegisterModal isLoggedIn={props.isLoggedIn}/>
      <Header isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn}/>
      <HeroWrapper />
      <Footer />
    </>
  );
}

export default HomePage;
