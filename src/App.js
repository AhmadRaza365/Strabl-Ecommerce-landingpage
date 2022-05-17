import Header from "./components/Header";
import Search from "./components/Search";
import pepsicologo from "./images/pepsicologo.jpg";
import airtablelogo from "./images/airtablelogo.jpg";
import dunkinlogo from "./images/dunkinlogo.jpg";
import hubspotlogo from "./images/hubspotlogo.jpg";
import zapierlogo from "./images/zapierlogo.jpg";
import CategoryCard from "./components/CategoryCard";
import BestSellerSection from "./components/BestSellerSection";

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Search />
      <img
        className="w-screen h-[350px] md:h-[500px] object-cover object-center"
        src="https://images.unsplash.com/photo-1561715276-a2d087060f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="Shopping bag"
      />
      <div className="mx-5 md:mx-10">
        <h2 className=" text-2xl md:text-4xl font-bold mt-10 md:mt-20 mb-5 md:mb-10">
          <span className="underline underline-offset-8 decoration-primary-red ">
            Brands
          </span>{" "}
          With us
        </h2>

        <section className="flex flex-wrap justify-center items-center gap-6 md:gap-10 my-5">
          <img
            src={pepsicologo}
            alt="Pepsico Logo"
            className="cursor-pointer hover:shadow-lg "
          />
          <img
            src={dunkinlogo}
            alt="Dunkin Logo"
            className="cursor-pointer hover:shadow-lg "
          />
          <img
            src={zapierlogo}
            alt="Zapier Logo"
            className="cursor-pointer hover:shadow-lg "
          />
          <img
            src={airtablelogo}
            alt="Air Table Logo"
            className="cursor-pointer hover:shadow-lg "
          />
          <img
            src={hubspotlogo}
            alt="Hub Spot Logo"
            className="cursor-pointer hover:shadow-lg "
          />
        </section>
        <h2 className=" text-2xl md:text-4xl font-bold mt-10 md:mt-20 mb-5 md:mb-10">
          <span className="underline underline-offset-8 decoration-primary-red ">
            Catego
          </span>
          ries
        </h2>
        <section className="flex flex-wrap justify-center items-center gap-6 md:gap-10 my-5">
       
        <CategoryCard title="Fashion" image= "https://images.unsplash.com/photo-1601762603339-fd61e28b698a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        <CategoryCard title="Recreational" image= "https://images.unsplash.com/photo-1591122519484-70428711810d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        <CategoryCard title="Electronic" image= "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
        </section>

        <BestSellerSection />
      </div>
    </div>
  );
}

export default App;
