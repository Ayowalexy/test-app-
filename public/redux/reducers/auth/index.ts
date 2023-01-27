import { createSlice } from "@reduxjs/toolkit";
import {
  signUp,
  login,
  getAllUsers,
  getProducts,
  deleteUser,
  editUser,
  deleteProduct,
  editProduct,
  addProduct
  
} from "./thunkAction";

interface IState {
  user: object;
  loading: "failed" | "pending" | "successful" | "idle";
  allUsers: [],
  allProducts: [],
  isLoading: "failed" | "pending" | "successful" | "idle";

}

let authenticated = "";

if (typeof window !== "undefined") {
  authenticated = localStorage.getItem("token") || "";
}
const initialState: IState = {
  user: {},
  loading: "idle",
  allUsers:[],
  allProducts:[],
  isLoading: "idle"

};

// Then, handle actions in your reducers:ß
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },

  extraReducers: (builder) => {
   
    //signup
    builder.addCase(signUp.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(signUp.fulfilled, (state) => {
      return { ...state, loading: "successful", };
    });
    builder.addCase(signUp.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });

    //login
    builder.addCase(login.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(login.fulfilled, (state, action) => {
      return { ...state, loading: "successful", user: action.payload };
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });

    //login
    builder.addCase(getAllUsers.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      return { ...state, loading: "successful", allUsers: action.payload };
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });

    //login
    builder.addCase(getProducts.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      return { ...state, loading: "successful", allProducts: action.payload };
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });

    //login
    builder.addCase(deleteUser.pending, (state) => {
      return { ...state, isLoading: "pending" };
    });

    builder.addCase(deleteUser.fulfilled, (state, action) => {
      return { ...state, isLoading: "successful", };
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, isLoading: "failed" };
    });

    //login
    builder.addCase(editUser.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(editUser.fulfilled, (state, action) => {
      return { ...state, loading: "successful", };
    });
    builder.addCase(editUser.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });



    builder.addCase(deleteProduct.pending, (state) => {
      return { ...state, isLoading: "pending" };
    });

    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      return { ...state, isLoading: "successful", };
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, isLoading: "failed" };
    });

    //login
    builder.addCase(editProduct.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(editProduct.fulfilled, (state, action) => {
      return { ...state, loading: "successful", };
    });
    builder.addCase(editProduct.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });

     //login
     builder.addCase(addProduct.pending, (state) => {
      return { ...state, loading: "pending" };
    });

    builder.addCase(addProduct.fulfilled, (state, action) => {
      return { ...state, loading: "successful", };
    });
    builder.addCase(addProduct.rejected, (state, action) => {
      console.log(action.payload);
      return { ...state, loading: "failed" };
    });

  },
});
export const authReducer = authSlice.reducer;

