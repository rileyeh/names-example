function InputField(props) {
    return (
        <form onSubmit={props.addNameToArr}>
            <input type="text" onChange={props.handleTyping} value={props.name}/>
        </form>
    )
}

export default InputField