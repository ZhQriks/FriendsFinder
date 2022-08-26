import { useDispatch as useReduxDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";

export const useDispatch = () => useReduxDispatch<AppDispatch>();
