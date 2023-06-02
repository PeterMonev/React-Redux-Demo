import { cardActions } from "./card-slice";
import { uiAction } from "./ui-slice";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const response = await fetch(
        "https://redux-http-f5c35-default-rtdb.firebaseio.com/cartItems.json"
      );
      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(cardActions.replaceData(cartData));
    } catch (error) {
        dispatch(
            uiAction.showNotification({
              open: true,
              message: "Sending Request Failed",
              type: "error",
            })
          );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        open: true,
        message: "Sending Request",
        type: "warning",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://redux-http-f5c35-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await response.json();
      dispatch(
        uiAction.showNotification({
          open: true,
          message: "Sending Request to Database Successfully",
          type: "success",
        })
      );
    };

    try {
      await sendRequest();
    } catch {
      dispatch(
        uiAction.showNotification({
          open: true,
          message: "Sending Request Failed",
          type: "error",
        })
      );
    }
  };
};
