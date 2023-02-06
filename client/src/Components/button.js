
//Add functions, potentially alert dialog window
const Button = ({name, buttonFunction}) => {
    return (
        <input type="button"
               onClick = {buttonFunction}
               value={name} />
    )
}

export default Button;