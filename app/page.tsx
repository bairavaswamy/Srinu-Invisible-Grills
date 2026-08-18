import Footer from "@/app/footer/Footer"
import HomePage from "./home/home";
import Navbar from "@/app/navbar/Navbar";
import StickyContactIcons from "./stickyicons/stickyIcons";

const Home = () => {
  return(
    <>
      <Navbar/>
      <HomePage/>
      <StickyContactIcons/>
      <Footer/>
      </>
  )
}

export default Home;