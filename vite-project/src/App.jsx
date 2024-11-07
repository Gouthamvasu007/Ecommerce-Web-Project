import Header from "./components/Header";
import HomePage from "./page/HomePage.component";
//import productCategories from "./page/product-categories";

const App = () => {
  const products = productCategories.sections;
  console.log(products);
  return (
    <>
      <Header />
      <HomePage productCategories={products} />
    </>
  );
};

export default App;
