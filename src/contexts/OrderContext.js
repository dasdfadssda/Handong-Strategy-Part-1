import React from "react";

export const OrderContext = React.createContext();

export function OrderProvider({ children }) {
  const [order, setOrder] = React.useState(
    () => window.sessionStorage.getItem("order") || ""
  );
  
  React.useEffect(() => {
    window.sessionStorage.setItem("order", order);
  }, [order]);
  
  console.log("현재 order: ", order);
  
  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
}
