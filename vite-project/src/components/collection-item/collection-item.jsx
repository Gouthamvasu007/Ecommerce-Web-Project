import React from "react";
import './collection-item.scss';
import CustomButton from "../collections/custom-button/custom-button";


const CollectionItem = () => {
    return (
        <div className = "collection-item">
            <div className="image" style={{}}>Image</div>
            <div className="collection-footer">
                <span className="Name">Name</span>
                <span className="price">100</span>
                <CustomButton>Add to cart</CustomButton>
            </div>
        
        </div>
    )
}

export default CollectionPreview;