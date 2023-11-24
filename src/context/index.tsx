import React, { createContext, useState } from "react";
import { ProductProps } from "../components/Card";

interface CartProviderProps {
  children: React.ReactNode;
}

interface ICartContext {
  cart: ProductProps[];
  setCart: React.Dispatch<React.SetStateAction<ProductProps[]>>;
}

export const CartContext = createContext<ICartContext>({} as ICartContext);
CartContext.displayName = "Cart Context";

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<ProductProps[]>([]);

  const cartContextValue: ICartContext = {
    cart,
    setCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
