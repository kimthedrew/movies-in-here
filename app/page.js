import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import TrendingMovies from "@/components/TrendingMovies";
import TrendingSeries from "@/components/TrendingSeries";

const HomePage = () => {
    return (
      <div className="p-4 space-y-6">
        <Navbar />
        <Search />
        <TrendingMovies />
        <TrendingSeries />
      </div>
    );
  };
  
  export default HomePage;