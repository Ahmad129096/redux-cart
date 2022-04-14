import { configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import uiSlice from "./ui-Slice";



const store = configureStore({
    reducer: {ui: uiSlice.reducer, cart: cartSlice.reducer}
})


export default store