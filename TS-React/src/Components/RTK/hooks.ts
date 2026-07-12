// Импорт стандартных хуков Redux и типа для типизированного селектора
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux"
// Импорт типов AppDispatch и RootState из store
import type { AppDispatch, RootState } from "./store"

// Типизированный хук useDispatch с типом AppDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
// Типизированный хук useSelector с типом RootState
export const useAppSelectot: TypedUseSelectorHook<RootState> = useSelector