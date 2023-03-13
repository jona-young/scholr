
//Add functions, potentially alert dialog window
const Button = ({name, buttonFunction, classname}) => {
    return (
        <input type="button"
               className={classname}
               onClick = {buttonFunction}
               value={name} />
    )
}

export default Button;