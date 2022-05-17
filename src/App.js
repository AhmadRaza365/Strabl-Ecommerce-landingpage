import Header from "./components/Header";
import Search from "./components/Search";
import pepsicologo from "./images/pepsicologo.jpg";
import airtablelogo from "./images/airtablelogo.jpg";
import dunkinlogo from "./images/dunkinlogo.jpg";
import hubspotlogo from "./images/hubspotlogo.jpg";
import zapierlogo from "./images/zapierlogo.jpg";
import CategoryCard from "./components/CategoryCard";
import BestSellerSection from "./components/BestSellerSection";
import landscape from "./images/landscape.jpg";
import RentalProguctsSection from "./components/RentalProguctsSection";
import ReviewCard from "./components/ReviewCard";
import FeaturedCard from "./components/FeaturedCard";
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
          <CategoryCard
            title="Fashion"
            image="https://images.unsplash.com/photo-1601762603339-fd61e28b698a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <CategoryCard
            title="Recreational"
            image="https://images.unsplash.com/photo-1591122519484-70428711810d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
          <CategoryCard
            title="Electronic"
            image="https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          />
        </section>

        <BestSellerSection />

        <section className="flex flex-wrap my-10 justify-center items-center">
          <div className="w-full md:w-3/5">
            <h2 className=" text-2xl md:text-4xl my-3 font-bold text-primary-red">
              Experiance,Try Before You Buy
            </h2>
            <p className="text-xl md:text-2xl my-3 text-dark-gray">
              Go Prepared in a Rugged 4x4 to Take on winter roads with ease, or
              a camper van to take you to the trees.
            </p>
            <button className="bg-primary-red text-white my-3 py-2 px-6 rounded-lg">
              Learn More
            </button>
          </div>
          <img className="" src={landscape} alt="" />
        </section>

        <h2 className=" text-2xl md:text-4xl font-bold mt-10 md:mt-20 mb-5 md:mb-10">
          <span className="underline underline-offset-8 decoration-primary-red ">
            For Ren
          </span>
          t
        </h2>
        <section className="flex flex-wrap gap-4 my-10 justify-center items-center">
          <div className="max-w-sm rounded-md shadow-xl hover:shadow-2xl cursor-pointer relative">
            <div className="absolute top-5 left-5">
              <h3 className="text-4xl font-bold">Electronics</h3>
              <p className="text-2xl my-2">Future Product</p>
            </div>
            <img
              className="w-full rounded-md aspect-square"
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt="Future Product"
            />
          </div>
          <div className="max-w-sm rounded-md shadow-xl hover:shadow-2xl cursor-pointer relative">
            <div className="absolute top-5 left-5">
              <h3 className="text-4xl font-bold">Music Instrument</h3>
              <p className="text-2xl my-2">Future Product</p>
            </div>
            <img
              className="w-full rounded-md aspect-square"
              src="https://images.unsplash.com/photo-1593801398340-e2f33f6e3e53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Music Instrument"
            />
          </div>
          <div className="max-w-sm rounded-md shadow-xl hover:shadow-2xl cursor-pointer relative">
            <div className="absolute top-5 left-5">
              <h3 className="text-4xl font-bold">Women Fashion</h3>
              <p className="text-2xl rounded-md my-2">Future Product</p>
            </div>
            <img
              className="w-full aspect-square"
              src="https://images.unsplash.com/photo-1589810635657-232948472d98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt="Women Fashion"
            />
          </div>
        </section>

        <RentalProguctsSection />

        <h2 className=" text-2xl md:text-4xl text-center font-bold mt-10 md:mt-20 mb-5 md:mb-10">
          Wh
          <span className="underline underline-offset-8 decoration-primary-red ">
            at Our Client Say
          </span>
          ing
        </h2>

        <section className="flex flex-wrap gap-4 my-10 justify-center items-center">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </section>

        <h2 className=" text-2xl md:text-4xl text-center font-bold mt-10 md:mt-20 mb-5 md:mb-10">
          F
          <span className="underline underline-offset-8 decoration-primary-red ">
          eatured I
          </span>
          n
        </h2>
        <section className="flex flex-wrap gap-4 my-10 justify-center items-center">
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </section>
      </div>
    </div>
  );
}

export default App;
