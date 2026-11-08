// Code SubmitButton Component Here

function SubmitButton () {
    function hanldeEnter () {
        console.log("Mouse Entering");
  }
    function handleLeave () {
        console.log ("Mouse Leaving");
  }

    return (
     <>
        <button
        onMouseEnter={hanldeEnter} // runs whenerver the button enters the button
        oneMouseLeave={handleLeave} // runs whenever the mouse leaves the button
        >
            Submit Password
        </button>
    
     </>
    );
};

export default SubmitButton; //allows the component to be used in another file