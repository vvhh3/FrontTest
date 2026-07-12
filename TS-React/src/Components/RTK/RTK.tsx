import { useAppDispatch, useAppSelectot } from "./hooks"
import { setUser } from "./UserSlice"

const RTK = () => {

    const user = useAppSelectot(state => state.user.user)
    const dispatch = useAppDispatch()

    return( 
        <div>
            <h1>User: {user?.name}</h1>
            <p>{user?.name}</p>
            <p>{user?.age}</p>
            <button onClick={() => dispatch(setUser({name: "egor", age: 10}))}
                className="p-2 bg-red-500 cursor-pointer">Изменить</button>
        </div>
    )
}

export default RTK