export const NameList = () => {
    const names = ["Bruce", "Clark", "Diana", "Bruce"]

    const nameList = names.map((n, index) => {
        return (
            <h2 key={index}>
                {index}{n}
            </h2>
        )
    }) 

    return <>
        {nameList}
    </>
}