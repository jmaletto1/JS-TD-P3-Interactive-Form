function selectFocus(element) {
	document.getElementById(element).focus();
}

//Call the selectFocus function, which sets the User's input to the Name input.
selectFocus("name");

//Hides the "Your Job Role" (other) field and label
$('#other-title').hide();
$('#other-title-label').hide();

//T-Shirt Info Function

const $tColor = $('#color');
const $themeDefault = `<option value="default">Select Colour to View Options</option>`;
$tColor.prepend($themeDefault);
$tColor.val("default");

//Hide Colours

function hideColours() {
$tColor.children('option[value="cornflowerblue"]').css('display','none');
$tColor.children('option[value="darkslategrey"]').css('display','none');
$tColor.children('option[value="gold"]').css('display','none');
$tColor.children('option[value="tomato"]').css('display','none');
$tColor.children('option[value="steelblue"]').css('display','none');
$tColor.children('option[value="dimgrey"]').css('display','none');
$tColor.val("default");
}

hideColours();

//Function that only shows the relevant t-shirt colours, depending on the user's design choice.

$tDesign = $('#design');
$tDesign.on('change', function() {
if ($tDesign.val() === "js puns") {
$tColor.children('option[value="cornflowerblue"]').css('display','block');
$tColor.children('option[value="darkslategrey"]').css('display','block');
$tColor.children('option[value="gold"]').css('display','block');
$tColor.children('option[value="tomato"]').css('display','none');
$tColor.children('option[value="steelblue"]').css('display','none');
$tColor.children('option[value="dimgrey"]').css('display','none');
$tColor.children('option[value="default"]').css('display','none');
$tColor.val("cornflowerblue");
}
else if ($tDesign.val() === "heart js") {
$tColor.children('option[value="cornflowerblue"]').css('display','none');
$tColor.children('option[value="darkslategrey"]').css('display','none');
$tColor.children('option[value="gold"]').css('display','none');
$tColor.children('option[value="tomato"]').css('display','block');
$tColor.children('option[value="steelblue"]').css('display','block');
$tColor.children('option[value="dimgrey"]').css('display','block');
$tColor.children('option[value="default"]').css('display','none');
$tColor.val("tomato");
}
else if ($tDesign.val() !== "js puns" || $tDesign.val() !== "heart js") {
hideColours();
}
}); 






// function tShirtSelector() {

// }



