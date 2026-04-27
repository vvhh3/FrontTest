import { memo } from "react"

const Title = memo(({ name }) => {

    return (
        <>
            <div className='bg-black text-white p-4 dark:bg-white dark:text-black'>
                {name}
            </div>
        </>
    )
})

export default Title