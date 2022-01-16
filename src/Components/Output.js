function Output(props) {
    const mappedNames = props.namesArr.map((name) => {
        return (
            <p key={name} className="riley">{name}</p>
        )
    })
    return (
        <div className="name-display">
            {mappedNames}
        </div>
    )
}

export default Output