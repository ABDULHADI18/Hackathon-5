import Editors from "./components/Landing-page-component/Editors";
import Feature_post from "./components/Landing-page-component/feature_post";
import Feature_Products from "./components/Landing-page-component/Feature_Product";
import Footer from "./components/Landing-page-component/footer";
import Green_div from "./components/Landing-page-component/green_div";
import Header from "./components/Landing-page-component/Header";
import Hero from "./components/Landing-page-component/Hero";
import Navbar from "./components/Landing-page-component/Navbar";
import White_div from "./components/Landing-page-component/white_div";

export default function Home() {
  return (
    <div>
       <Navbar />
       <Header />
       <Hero />
       <Editors />
       <Feature_Products />
       <Green_div />
       <White_div />
       <Feature_post />
       <Footer />
    </div>
  )
}
