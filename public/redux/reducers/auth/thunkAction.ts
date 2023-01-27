import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import config from "../../../../config/api";
import useAxios from "../../../hooks/UseAxios";

export const signUp = createAsyncThunk(
  "auth/signup",
  async (data: object, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/auth/register`,
        method: "post",
        data: data,
      });

      console.log(response);

      if (typeof window !== "undefined") {
        // localStorage.setItem("user", JSON.stringify(authData.data.user));
        // localStorage.setItem("token", authData.data.token);
      }
      return response.data;
    } catch (error) {


      if (axios.isAxiosError(error) && error.response) {
        let err = error.response.data.meta.error as { error: { message: string } };
        console.log('err', err)

        const msg = error.response.data.message as string || 'An error occured, please try again'
        toast.error(err.toString())
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (data: object, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/auth/login`,
        method: "post",
        data: data,
      });


      const authData = response;


      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(authData.data.user));
        localStorage.setItem("token", authData.data.token);
      }
      return response.data.data
    } catch (error) {


      if (axios.isAxiosError(error) && error.response) {
        let err = error.response.data.meta.error as { error: { message: string } };
        console.log('err', err)

        const msg = error.response.data.message as string || 'An error occured, please try again'
        toast.error(err.toString());
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);



export const getAllUsers = createAsyncThunk(
  "auth/allUsers",
  async (data: object, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/auth`,
        method: "get",
      });


      console.log(response.data.data)
      return response.data.data
    } catch (error) {


      if (axios.isAxiosError(error) && error.response) {
        let err = error.response.data.meta.error as { error: { message: string } };
        console.log('err', err)

        const msg = error.response.data.message as string || 'An error occured, please try again'
        toast.error(err.toString());
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);



export const getProducts = createAsyncThunk(
  "auth/products",
  async (data: object, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/product`,
        method: "get",
      });

    
      return response.data.data
    } catch (error) {


      if (axios.isAxiosError(error) && error.response) {
        let err = error.response.data.meta.error as { error: { message: string } };
        console.log('err', err)

        const msg = error.response.data.message as string || 'An error occured, please try again'
        toast.error(err.toString());
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);


export const adddUser = createAsyncThunk(
  "auth/addUser",
  async (data: object, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/product`,
        method: "get",
      });

    
      return response.data.data
    } catch (error) {


      if (axios.isAxiosError(error) && error.response) {
        let err = error.response.data.meta.error as { error: { message: string } };
        console.log('err', err)

        const msg = error.response.data.message as string || 'An error occured, please try again'
        toast.error(err.toString());
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);



export const deleteUser = createAsyncThunk(
  "auth/deleteuser",
  async (data: object, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/auth/delete`,
        method: "delete",
        data: data
      });

    
      return response.data.data
    } catch (error) {


      if (axios.isAxiosError(error) && error.response) {
        let err = error.response.data.meta.error as { error: { message: string } };
        console.log('err', err)

        const msg = error.response.data.message as string || 'An error occured, please try again'
        toast.error(err.toString());
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);



export const editUser = createAsyncThunk(
  "auth/editUser",
  async (data: object, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/auth`,
        method: "post",
        data: data
      });

    
      return response.data.data
    } catch (error) {


      if (axios.isAxiosError(error) && error.response) {
        let err = error.response.data.meta.error as { error: { message: string } };
        console.log('err', err)

        const msg = error.response.data.message as string || 'An error occured, please try again'
        toast.error(err.toString());
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);


export const deleteProduct = createAsyncThunk(
  "auth/deleteProduct",
  async (data: object, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/product`,
        method: "delete",
        data: data
      });

    
      return response.data.data
    } catch (error) {


      if (axios.isAxiosError(error) && error.response) {
        let err = error.response.data.meta.error as { error: { message: string } };
        console.log('err', err)

        const msg = error.response.data.message as string || 'An error occured, please try again'
        toast.error(err.toString());
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);


export const editProduct = createAsyncThunk(
  "auth/editProduct",
  async (data: object, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/product`,
        method: "patch",
        data: data
      });

    
      return response.data.data
    } catch (error) {


      if (axios.isAxiosError(error) && error.response) {
        let err = error.response.data.meta.error as { error: { message: string } };
        console.log('err', err)

        const msg = error.response.data.message as string || 'An error occured, please try again'
        toast.error(err.toString());
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);


export const addProduct = createAsyncThunk(
  "auth/addProduct",
  async (data: object, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/product`,
        method: "post",
        data: data
      });

    
      return response.data.data
    } catch (error) {


      if (axios.isAxiosError(error) && error.response) {
        let err = error.response.data.meta.error as { error: { message: string } };
        console.log('err', err)

        const msg = error.response.data.message as string || 'An error occured, please try again'
        toast.error(err.toString());
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);
