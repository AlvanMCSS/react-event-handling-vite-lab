// Code PasswordInput Component Here

function PasswordInput () {    // creates our react component
 function handleChange() {   // this is our event handler function
    console.log ("Entering Password")  // prints the messages on the browser console
 }
 return (
    <>
    <input type="password"  // makes the input to hide characters
    onChange={handleChange} // calls the function whenever the input changes
    />

    </>
 );
};

export default PasswordInput; // allows us to use the componenent in another file