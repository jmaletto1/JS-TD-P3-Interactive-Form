function selectFocus(element) {
	document.getElementById(element).focus();
}

//Call the selectFocus function, which sets the User's input to the Name input.
selectFocus("name");

// Hides the "Your Job Role" (other) field and label

$('#other-title').hide();
$('#other-title-label').hide();

/* This 'on' event listens out for a change in the 'Job Role' field. 
If the input is set to "Other", then the additional field is displayed.
The field is then removed if the user switches back to a different field.*/

$('#title').on('change', function() {
if ($('#title').val() === "other") {
	$('#other-title').show();
	$('#other-title-label').show();
		return; 
	} $('#other-title').hide();
	$('#other-title-label').hide();
})

// T-Shirt Info Function

const $tColor = $('#color');
const $themeDefault = `<option value="default">Please select a T-shirt theme</option>`;
$tColor.prepend($themeDefault);
$tColor.val("default");

/* These "hide" and "show" colour functions will be called on in the following section, 
depending on which design is selected*/

function hideColours() {
$tColor.hide();	
$tColor.prev().hide();
}

function showColours() {
$tColor.show();	
$tColor.prev().show();
}

hideColours();

// This function sets or hides the relevant t-shirt colours, depending on the user's design selection.

$tDesign = $('#design');

$tDesign.on('change', function() {

	$tColor.children('option').css('display', 'none');
	hideColours();
	
if ($tDesign.val() === "js puns") {
	showColours();
	$tColor.children('option[value="cornflowerblue"]').css('display','block');
	$tColor.children('option[value="darkslategrey"]').css('display','block');
	$tColor.children('option[value="gold"]').css('display','block');
	$tColor.val("cornflowerblue");
}
else if ($tDesign.val() === "heart js") {
	showColours();
	$tColor.children('option[value="tomato"]').css('display','block');
	$tColor.children('option[value="steelblue"]').css('display','block');
	$tColor.children('option[value="dimgrey"]').css('display','block');
	$tColor.val("tomato");
}

}); 


// Set the variables for the pricing section

$activities = $('.activities');
let priceValue = '0';

/* This function updates the price depending on two factors - the amount, and the symbol.
When a checkbox is checked, a "+" symbol is sent to the function, increasing the price. When unchecked, a "-" is sent.*/

function priceMaker(value, factor) {
	$('.priceClass').remove();
	if (factor === '+') {
		priceValue += value;
	} else if (factor === '-') {
		priceValue -= value; 
	}
	priceValue = parseInt(priceValue);
	$activities.append(`<p class="priceClass">Price: $${priceValue}</p>`);
	}

/* The "Hide activities" section below was simplified by adding this function.
The function simply removes the current price, before passing the new values on to the priceMaker function.*/

function valueEditor(value, symbol) {
	$('.priceClass').remove();
	priceMaker(value, symbol);
}

// Here, we update the price depending on the user's selection(s). Conflicting activities are also greyed out where necessary.

$('input[type="checkbox"]').change(function () {
	$('input').prop('disabled', false).parent().css("opacity", "1.0");

	val = 100;
	fact = "-";

	if (this.checked) {
	fact = "+"
	}

	if ($(this).attr("name") == "all") {
		val = 200;
	}

	if ($('input[name="js-frameworks"]').is(':checked')) {
		$('input[name="express"]').prop('disabled', true).parent().css("opacity", "0.5");
	}

	if ($('input[name="js-libs"]').is(':checked')) {
		$('input[name="node"]').prop('disabled', true).parent().css("opacity", "0.5");
	}

	if ($('input[name="express"]').is(':checked')) {
		$('input[name="js-frameworks"]').prop('disabled', true).parent().css("opacity", "0.5");
	}

	if ($('input[name="node"]').is(':checked')) {
		$('input[name="js-libs"]').prop('disabled', true).parent().css("opacity", "0.5");
	}

	priceMaker(val, fact);

})


/* Here I've set the default payment method to Credit Card, by hiding the other options.
I've also set a variable called "cardCall", which will be used to determine 
whether the regex is carried out against the user's Credit Card details.*/

$('#payment').val('credit card');
$('#paypal').hide();
$('#bitcoin').hide();
$("#payment option[value='select method']").remove();
let cardCall = true;

// Payment Field Selector Function

$('#payment').on('change', function () {
	$('#credit-card').hide();
	$('#bitcoin').hide();
	$('#paypal').hide();
	cardCall = false;

if ($('#payment').val() === "credit card") {
	$('#credit-card').show();
	cardCall = true;
	return;
}

 if ($('#payment').val() === "paypal") {
	$('#paypal').show();
} else {
	$('#bitcoin').show();
}
})

/* This section listens to the "name" field using a .keyup() listener. 
If the user's name is less than four letters, a message will be appended to the H1 above until resolved*/

$('#name').keyup(function () {
if ($('#name').val().length > 0 && $('#name').val().length < 4) {
	$('form h2').remove();	
	$('#name').css("border-color", "red").prev().css("color", "red");
	$('form').prepend(`<h2 style="color:red">Please enter a name that is four letters or longer</h1>`);
	return;
	}
	$('#name').css("border-color", "black").prev().css("color", "black");
	$('form h2').remove();	
	})

/* FORM Submission.
This section first listens for a 'submit' event on the form.
When received, it sets the values for the Name, Email, Activities checkboxes, Credit Card Number, Zip and CVV.
It also sets the regex requirements for each value.
The function then progresses to check each regex test result for a negative value. If received, the border
of the relevant field is set to red. The preventDefault() function is also called in each instance.

I gave the credit card field some additional functionality by adding a placeholder message if the user doesn't
submit a card number. This is naturally replaced by the user typing a number in.
Additionally, if they do not provide a number that is between 13-16 digits, a message will be appended beneath
the input requiring them to do so.
*/

function highlight(tag, color, select) {
	t = "#" + tag
	$(t).css("border-color", color).prev().css("color", color);
	if (select) {
		selectFocus(tag);
	}
}

function setDefault() {
	highlight("name", "black", false);
	highlight("mail", "black", false);
	$('.activities legend').css("color", "black").css("font-weight", "normal");
	$('#zip').css("color", "black").css("border-color", "black").css("font-weight", "normal").prev().css("color", "black");
	$('#cvv').css("color", "black").css("border-color", "black").css("font-weight", "normal").prev().css("color", "black");
}

$("form").on('submit', function(e) {
	const nameTest = $('#name').val();
	const nameResult = /^[A-Za-z]+$/.test(nameTest);
	const emailTest = $('#mail').val();
	const emailResult = (/^[^@]+@[^@.]+\.[a-z]+$/i.test(emailTest));
	const isChecked = $('input:checkbox').is(':checked');
	const cardTest = $('#cc-num').val();
	const cardResult = (/^[\d]{4}\s?[\d]{4}\s?[\d]{4}\s?[\d]{1,4}\s?$/.test(cardTest));
	const zipTest = $('#zip').val();
	const zipResult = (/^[\d]{5}$/.test(zipTest));
	const cvvTest = $('#cvv').val();
	const cvvResult = (/^[\d]{3}$/.test(cvvTest));

	setDefault();

	if (nameResult === false) {
		e.preventDefault();
		highlight("name", "red", true)
	}

	if (emailResult === false) {
		e.preventDefault();
		highlight("mail", "red", true)
	}

	if (!isChecked) {
		e.preventDefault();
		$('.activities legend').css("color", "red").css("font-weight", "bold");
	} 

	if (cardCall) {
		if (!cardResult) {
			e.preventDefault();
			if ($('#cc-num').val() === "") {
				$('#cc-num').attr("placeholder", "Please enter a credit card number");
			} else if ($('#cc-num').val().length > 16 || $('#cc-num').val().length < 13 || !cardResult) {
				$('.warning').remove();
				$('#cc-num').css("border-color", "red").parent().append("<div class='warning'><b><p style='color:red'>Please add a 13-16 Digit Card Number!</p></b><br></div>");
			}
			$('#cc-num').css("border-color", "black").css("color", "red").css("font-weight", "bold").prev().css("color", "red");
		} else {
			$('#cc-num').css("border-color", "black").css("color", "black").css("font-weight", "normal").prev().css("color", "black");
			$('.warning').remove();
		}

		if (!zipResult) {
			e.preventDefault();
			$('#zip').css("color", "red").css("border-color", "red").css("font-weight", "bold").prev().css("color", "red");
		}

		if (!cvvResult) {
			e.preventDefault();
			$('#cvv').css("color", "red").css("border-color", "red").css("font-weight", "bold").prev().css("color", "red");
		}
	}
})