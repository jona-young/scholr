
//Add functions, potentially alert dialog window
const Button = () => {
    return (
        <input type="button"
               onClick = {() => { console.log('button clicked!')}}
               value="Button" />
    )
}

export default Button;