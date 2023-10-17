import React from "react";

const MenuCard = ({ menuData }) => {
  // console.log(menuData);
  return (
    <>
      <section className="main-card--cointainer">
      {menuData.map((curElem) => {
        const {id, name, photo, description } = curElem;
        return (
          <>
            <div className="card-container" key={id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">
                    {id}
                  </span>
                  <span className="card-author subtle">{name}</span>
                  <h2 className="card-title">{name}</h2>
                  <span className="card-descriptio subtle">
                  {description}
                  </span>
                  <div className="card-read">Read</div>
                </div>
                <img src="baz" alt={`Baz taking a ${photo}`} />
                <span className="card-tag subtle">Order Now</span>
              </div>
            </div>
          </>
        );
      })}
      </section>
    </>  
  );
};

export default MenuCard;
