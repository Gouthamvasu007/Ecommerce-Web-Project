import MenuItem from "../components/MenuItem";
import "./home-page.style.css";

const HomePage = (props) => {
    
  return (
    <div className="home-page">
      <h1>Welcome to my Home Page</h1>
      <div className="directory-menu">
        {
            props.productCategories.map((product)=>(
            <MenuItem key={product.id} product={product}/>
        ))
        }
      </div>
    </div>
  );
};
export default HomePage;
