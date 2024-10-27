import "./App.css";
import Categories from "./components/Categories";
import Layout from "./components/Layout";
import useProduct from "./hooks/useProduct";

function App() {
  const { products, isLoading, currentCategory, setCurrentCategory } =
    useProduct();

  return (
    <Layout>
      <section>
        <Categories active={currentCategory} setActive={setCurrentCategory} />
      </section>
      <section className="mt-6">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {products.map((product) => (
              <a key={product.id} href="/">
                <div className="bg-white rounded-lg shadow-md p-4 mb-2">
                  <img
                    className=" aspect-square object-contain hover:scale-105 transition duration-300 ease-in-out"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <h3 className="font-semibold line-clamp-2 text-base">
                  {product.title}
                </h3>
                <p className="font-bold text-lg text-green-600">
                  ${product.price}
                </p>
              </a>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}

export default App;
