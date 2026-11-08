// Code SubmitButton Component Here

function SubmitButton () {
    function handleEnter () {
        console.log("Mouse Entering");
  }
    function handleLeave () {
        console.log ("Mouse leaving");
  }

    return (
     <>
        <button
        onMouseEnter={handleEnter} // runs whenerver the button enters the button
        onMouseLeave={handleLeave} // runs whenever the mouse leaves the button
        >
            Submit Password
        </button>
    
     </>
    );
};

export default SubmitButton; //allows the component to be used in another file