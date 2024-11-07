import React from "react";

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
      <h1>{title}</h1>
      <div className="preview">
        {items.map((item) => (
          <div key={item.id} className="collection-item">
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
export default CollectionPreview;