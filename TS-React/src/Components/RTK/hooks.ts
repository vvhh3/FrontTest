import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux"
import type { AppDispatch, RootState } from "./store"

// Типизированный хук useDispatch с типом AppDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() //нужно вернуть dispatch нужного типа, поэтому делаем функцию-обёртку.
// Типизированный хук useSelector с типом RootState
export const useAppSelectot: TypedUseSelectorHook<RootState> = useSelector //нужно переопределить тип параметра state, поэтому используем TypedUseSelectorHook

