import React, { useState } from "react";
import PropTypes from "prop-types";
import MaximumProduct from "../../components/Dialogs/MaximumProduct";

function Footer({ onAddToCart, productViewDetail, itemInCart }) {
  const [isShowWarningFullItem, setisShowWarningFullItem] = useState(false);
  const onAddToCartAtViewDetail = () => {
    if (
      // eslint-disable-next-line operator-linebreak
      itemInCart.length >= 3 &&
      itemInCart.some((x) => x.id === productViewDetail.id) === true
    ) {
      onAddToCart(productViewDetail);
    } else if (
      // eslint-disable-next-line operator-linebreak
      itemInCart.length < 3
    ) {
      onAddToCart(productViewDetail);
    } else if (
      // eslint-disable-next-line operator-linebreak
      itemInCart.length >= 3 &&
      itemInCart.some((x) => x.id === productViewDetail.id) === false
    ) {
      setisShowWarningFullItem(true);
    }
  };
  const onCloseDialog = () => {
    setisShowWarningFullItem(false);
  };
  return (
    <>
      <div
        role="button"
        tabIndex="0"
        onClick={() => onAddToCartAtViewDetail()}
        className="flex h-16 border-t justify-end items-center border-border border-solid cursor-pointer"
      >
        {itemInCart.some((x) => x.id === productViewDetail.id) ? (
          <span className="h-full pt-5 w-[200px] text-white hover:bg-[#2a2b2f] text-center bg-[#3c3e49] font-bold">
            Remove template
          </span>
        ) : (
          <span className="h-full pt-5 w-[200px] hover:bg-[#00cb54] text-center bg-[#00d659] font-bold">
            Go to payment overview
          </span>
        )}
      </div>
      {isShowWarningFullItem ? (
        <MaximumProduct onCloseDialog={onCloseDialog} />
      ) : (
        false
      )}
    </>
  );
}
Footer.propTypes = {
  onAddToCart: PropTypes.func,
  productViewDetail: PropTypes.object,
  itemInCart: PropTypes.array,
};
export default Footer;
