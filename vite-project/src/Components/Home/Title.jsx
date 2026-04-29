import { memo } from "react"

const Title = memo(({ name }) => {

    return (
        <div className='flex w-full justify-center' >
            <div className='bg-black flex w-full ml-2 mr-2 rounded-2xl text-white p-4 dark:bg-gray-800 dark:border dark:text-white'>
                <p className="font-bold text-2xl">{name}</p>
            </div>
        </div>
    )
})

export default Title