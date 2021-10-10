import { useContext } from "react";
import boothContext from "../context/boothcontext";

const useBooth = () => useContext(boothContext);
export default useBooth;
