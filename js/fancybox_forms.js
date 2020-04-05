function validateName(valName){
	console.log("validateName " + valName.val());
	var name = String(valName.val());
	if(name == "Имя" || name == ""){
		valName.addClass("input_error");
		valName.focus();
		return false;
	} else {
		valName.removeClass("input_error");
	}
	return true;
}

function validatePhone(valPhone){
	console.log("validatePhone " + valPhone.val());
	var phone = String(valPhone.val());
	var isValid = phone.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
	if(isValid == null || (phone === "Телефон" || phone === "")){
		valPhone.addClass("input_error");
		valPhone.focus();
		return false;
	} else {
		valPhone.removeClass("input_error");
	}
	return true;
}