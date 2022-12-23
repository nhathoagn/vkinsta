import { useDispatch, useSelector } from "react-redux";
export default function useDarkSide() {
  const { dark } = useSelector((state) => state.themeReducer);
  console.log("dark");
}
