import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const responce = await fetch(API_URL);
      const data = await responce.json();

      console.log(data);
      setPosts(data);
    } catch (error) {
      console.log("Error", error);
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div >
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="grid xs:grid-col-1 sm:grid-cols-2  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 p-2 max-w-6xl mx-auto space-y-10 space-x-6 min-h-[80vh] ">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center ">
          <p className="text-3xl">No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
