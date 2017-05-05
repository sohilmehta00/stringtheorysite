$( document ).ready( function() {
  
  // button-1
  var button1 = $( '.donate-button' );
  var option1 = $( '.option-1' );
  var option2 = $( '.option-2' );
  var option3 = $( '.option-3' );
  var option4 = $( '.option-4' );
  var optionOther = $( '.option-other');
  
  function animateButton1() {
    option1.toggleClass( 'moved');
    option2.toggleClass( 'moved');
    option3.toggleClass( 'moved');
    option4.toggleClass( 'moved');
    optionOther.toggleClass( 'moved');
  };
  
  button1.click( 'toggle', animateButton1);
  
  // button-2
  var button2 = $( '.donate-button-2' );
  var checkmark = $( '.registered-checkmark' );
  var confirmationText = $( '.confirmation-text' );
  
  function animateButton2() {
    
    
    button2.toggleClass( 'drop' );
    checkmark.toggleClass( 'spin' );
    confirmationText.toggleClass( 'visible');

  }
  
  button2.click( 'toggle', animateButton2);
  
});