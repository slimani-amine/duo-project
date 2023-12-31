import React from "react";
const ProductsListasadmin = (props) => {
  return (
    <div>
      <div className="products-details">
        {props.data.map((e, i) => {
          return (
            <div class="card">
              <div class="card-border-top"></div>
              <div>
                <img
                  class="img"
                  src={e.imageUrl}
                />
              </div>
              <span> {e.name}</span>
              <p class="job"> {e.price}DT</p>
              <button
                onClick={() => {
                  props.setElement(e);
                  props.switchView("updateproject");
                 
                }}
              >
                UPDATE
              </button>
              <button
                onClick={() => {
                  props.deleteProduct(e);
                }}
              >
                DELETE
              </button>
              
            </div>
          );
        })}
        <br />
      </div>
      <div className="divaddbutton">
        <button
          className="addbutton"
          onClick={() => {
            props.switchView("addproduct");
          }}
        >
          ADD Prduct
        </button>
      </div>
    </div>
  );
};
export default ProductsListasadmin;
