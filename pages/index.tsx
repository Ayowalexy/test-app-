import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Login from "./auth/login";

export default function Home() {
  return (
      <Login />
  );
}
