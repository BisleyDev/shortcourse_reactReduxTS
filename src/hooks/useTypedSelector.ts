import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootReducer} from "../store/reducers/rootReducer";

export const useTypedSelector: TypedUseSelectorHook<RootReducer> = useSelector