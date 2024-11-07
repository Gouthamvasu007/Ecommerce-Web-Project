

// import React from 'react';
// import { useParams } from 'react-router-dom';
// import ShopData from '../shop-page/shop-data.js';
// import '../shop-page/shop-page.scss';

// const ShopPage = () => {
//   const { category } = useParams();

//   // Check if category is defined to prevent errors
//   const categoryData = category
//     ? ShopData.find((cat) => cat.title.toLowerCase() === category.toLowerCase())
//     : null;

//   return (
//     <div className="shop-page">
//       {category ? (
//         categoryData ? (
//           <>
//             <h2>{categoryData.title}</h2>
//             <div className="items">
//               {categoryData.items.map((item) => (
//                 <div key={item.id} className="item">
//                   <img src={item.imageUrl} alt={item.name} />
//                   <p>{item.name}</p>
//                   <p className="item-price">${item.price}</p>
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <p>Category not found</p>
//         )
//       ) : (
//         // Render all categories when category is undefined
//         <>
//           <h2>All Categories</h2>
//           <div className="categories">
//             {ShopData.map((cat) => (
//               <div key={cat.id} className="category">
//                 <h3>{cat.title}</h3>
//                 <div className="items">
//                   {cat.items.slice(0, 4).map((item) => ( // Show 4 items for each category
//                     <div key={item.id} className="item">
//                       <img src={item.imageUrl} alt={item.name} />
//                       <p>{item.name}</p>
//                       <p className="item-price">${item.price}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default ShopPage;



import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ShopData from '../shop-page/shop-data.js';
import '../shop-page/shop-page.scss';

const ShopPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const categoryData = category
    ? ShopData.find((cat) => cat.title.toLowerCase() === category.toLowerCase())
    : null;

  const handleCategoryClick = (catTitle) => {
    navigate(`/shop/${catTitle.toLowerCase()}`); // Navigate to the selected category
  };

  return (
    <div className="shop-page">
      <h1>Shop Page</h1>
      {category ? (
        categoryData ? (
          <>
            <h2>{categoryData.title}</h2>
            <div className="items">
              {categoryData.items.map((item) => (
                <div key={item.id} className="item">
                  <img src={item.imageUrl} alt={item.name} />
                  <p>{item.name}</p>
                  <p className="item-price">${item.price}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>Category not found</p>
        )
      ) : (
        <>
          <h2>All Categories</h2>
          <div className="categories">
            {ShopData.map((cat) => (
              <div key={cat.id} className="category" onClick={() => handleCategoryClick(cat.title)}>
                <h3>{cat.title}</h3>
                <div className="items">
                  {cat.items.slice(0, 4).map((item) => (
                    <div key={item.id} className="item">
                      <img src={item.imageUrl} alt={item.name} />
                      <p>{item.name}</p>
                      <p className="item-price">${item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ShopPage;
