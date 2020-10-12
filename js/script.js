function selectFocus(element) {
	document.getElementById(element).focus();
}

//Call the selectFocus function, which sets the User's input to the Name input.
selectFocus("name");

//Hides the "Your Job Role" (other) field and label
$('#other-title').hide();
$('#other-title-label').hide();

$('#title').on('change', function() {
if ($('#title').val() === "other") {
	$('#other-title').show();
	$('#other-title-label').show(); }
else if ($('#title').val() !== "other") {
	$('#other-title').hide();
	$('#other-title-label').hide();
}
})

//T-Shirt Info Function

const $tColor = $('#color');
const $themeDefault = `<option value="default">Please select a T-shirt theme</option>`;
$tColor.prepend($themeDefault);
$tColor.val("default");

//Hide Colours

// function hideColours() {
// $tColor.children('option[value="cornflowerblue"]').css('display','none');
// $tColor.children('option[value="darkslategrey"]').css('display','none');
// $tColor.children('option[value="gold"]').css('display','none');
// $tColor.children('option[value="tomato"]').css('display','none');
// $tColor.children('option[value="steelblue"]').css('display','none');
// $tColor.children('option[value="dimgrey"]').css('display','none');
// $tColor.val("default");
// }

// hideColours();

function hideAllColours() {
$tColor.hide();	
$tColor.prev().hide();
}

function showColours() {
$tColor.show();	
$tColor.prev().show();
}

hideAllColours();

//Function that only shows the relevant t-shirt colours, depending on the user's design choice.

$tDesign = $('#design');
$tDesign.on('change', function() {
if ($tDesign.val() === "js puns") {
	showColours();
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
	showColours();
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


// Add Price Function
$activities = $('.activities');
let priceValue = '0';
$totalPrice = `<p class="priceClass">Price: $${priceValue}</p>`;


function priceMaker(value, factor) {
if (factor === '+') {
priceValue += value;
priceValue = parseInt(priceValue);
$activities.append(`<p class="priceClass">Price: $${priceValue}</p>`);
return priceValue;
} else if (factor === '-') {
priceValue -= value;
priceValue = parseInt(priceValue);
$activities.append(`<p class="priceClass">Price: $${priceValue}</p>`);
return priceValue;
}
}

// Hide other activities Functions/Listeners
$('input[name="all"]').change(function () {
	if (this.checked) {
	$('.priceClass').remove();
	priceMaker(200, "+");
} else if (this.checked === false) {
	$('.priceClass').remove();
	priceMaker(200, "-");
}
})

$('input[name="js-frameworks"]').change(function () {
if (this.checked) {
	$('.priceClass').remove();
	priceMaker(100, "+");
	$('input[name="express"]').prop('disabled', true).parent().css("opacity", "0.5");
} else if (this.checked === false) {
	$('.priceClass').remove();
	priceMaker(100, "-");
	$('input[name="express"]').prop('disabled', false).parent().css("opacity", "1.0");
}
})

$('input[name="js-libs"]').change(function () {
if (this.checked) {
	$('.priceClass').remove();
	priceMaker(100, "+");
	$('input[name="node"]').prop('disabled', true).parent().css("opacity", "0.5");
} else if (this.checked === false) {
	$('.priceClass').remove();
	priceMaker(100, "-");
	$('input[name="node"]').prop('disabled', false).parent().css("opacity", "1.0");
}
})

$('input[name="express"]').change(function () {
if (this.checked) {
	$('.priceClass').remove();
	priceMaker(100, "+");
	$('input[name="js-frameworks"]').prop('disabled', true).parent().css("opacity", "0.5");
} else if (this.checked === false) {
	$('.priceClass').remove();
	priceMaker(100, "-");
	$('input[name="js-frameworks"]').prop('disabled', false).parent().css("opacity", "1.0");
}
})

$('input[name="node"]').change(function () {
if (this.checked) {
	$('.priceClass').remove();
	priceMaker(100, "+");
	$('input[name="js-libs"]').prop('disabled', true).parent().css("opacity", "0.5");
} else if (this.checked === false) {
	$('.priceClass').remove();
	priceMaker(100, "-");
	$('input[name="js-libs"]').prop('disabled', false).parent().css("opacity", "1.0");
}
})

$('input[name="build-tools"]').change(function () {
if (this.checked) {
	$('.priceClass').remove();
	priceMaker(100, "+");
} else if (this.checked === false) {
	$('.priceClass').remove();
	priceMaker(100, "-");
}
})

$('input[name="npm"]').change(function () {
if (this.checked) {
	$('.priceClass').remove();
	priceMaker(100, "+");
} else if (this.checked === false) {
	$('.priceClass').remove();
	priceMaker(100, "-");
}
})


//Select Credit Card by Default

$('#payment').val('credit card');
$('#paypal').hide();
$('#bitcoin').hide();
$("#payment option[value='select method']").remove();
let cardCall = true;

// Payment Field Selector Function
$('#payment').on('change', function () {
if ($('#payment').val() === "paypal") {
	$('#credit-card').hide();
	$('#bitcoin').hide();
	$('#paypal').show();
	cardCall = false;
} else if ($('#payment').val() === "bitcoin") {
	$('#credit-card').hide();
	$('#bitcoin').show();
	$('#paypal').hide();
	cardCall = false;
} else {
	$('#credit-card').show();
	$('#bitcoin').hide();
	$('#paypal').hide();
	cardCall = true;
}
})

$('#name').keyup(function () {
if ($('#name').val().length < 4) {
	$('form h2').remove();	
	$('#name').css("border-color", "red").prev().css("color", "red");
	$('form').prepend(`<h2 style="color:red">Please enter a name that is four letters or longer</h1>`);
	} else {
	$('#name').css("border-color", "black").prev().css("color", "black");
	$('form h2').remove();	
	}

})

$("form").on('submit', function(e) {
	const nameTest = $('#name').val();
	const nameResult = /^[A-Za-z]+\s[A-Za-z]+$/.test(nameTest);
	const emailTest = $('#mail').val();
	const emailResult = (/^[^@]+@[^@.]+\.[a-z]+$/i.test(emailTest));
	const isChecked = $('input:checkbox').is(':checked');
	const cardTest = $('#cc-num').val();
	const cardResult = (/^[\d]{4}\s?[\d]{4}\s?[\d]{4}\s?[\d]{1,4}\s?$/.test(cardTest));
	const zipTest = $('#zip').val();
	const zipResult = (/^[\d]{5}$/.test(zipTest));
	const cvvTest = $('#cvv').val();
	const cvvResult = (/^[\d]{3}$/.test(cvvTest));

	if (nameResult === false) {
		e.preventDefault();
		$('#name').css("border-color", "red").prev().css("color", "red");
		selectFocus("name");
		// $('form').prepend(`<h1>Error!</h1>`);
	} else {
		$('#name').css("border-color", "black").prev().css("color", "black");
		// $('form h1').remove();
} if (emailResult === false) {
		e.preventDefault();
		$('#mail').css("border-color", "red").prev().css("color", "red");
		selectFocus("mail");
	} else {
		$('#mail').css("border-color", "black").prev().css("color", "black");
	}
	if (!isChecked) {
		e.preventDefault();
		$('.activities legend').css("color", "red").css("font-weight", "bold");
	} else {
		$('.activities legend').css("color", "black").css("font-weight", "normal");
	}
	if (cardCall) {
		if (!cardResult) {
			e.preventDefault();
			if ($('#cc-num').val() === "") {
				$('#cc-num').attr("placeholder", "Please enter a credit card number");
			} else if ($('#cc-num').val().length > 16 || $('#cc-num').val().length < 13) {
				// $('#cc-num').prev().remove();
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
	} else {
			$('#zip').css("color", "black").css("border-color", "black").css("font-weight", "normal").prev().css("color", "black");
	}
		if (!cvvResult) {
			e.preventDefault();
			$('#cvv').css("color", "red").css("border-color", "red").css("font-weight", "bold").prev().css("color", "red");
		} else {
			$('#cvv').css("color", "black").css("border-color", "black").css("font-weight", "normal").prev().css("color", "black");
		}
	}
})

