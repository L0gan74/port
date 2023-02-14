import React from "react";

const ProductBtn = () => {
  const [activeBtn, setActiveBtn] = React.useState(0);

  const categoriesBtn = ["Все продукты", "123", "412412"];

  const onClickActiveBtn = (index) => {
    setActiveBtn(index);
  };

  return (
    <div className="category">
      {categoriesBtn.map((value, index) => (
        <button
          type="button"
          onClick={() => onClickActiveBtn(index)}
          className={activeBtn == index ? "active-btn" : ""}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default ProductBtn;
