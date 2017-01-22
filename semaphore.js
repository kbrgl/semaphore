/* Semaphore Alerts | (c) 2016 Kabir Goel | MIT License */

function semaphore(status, text) {
	var alertdiv = document.createElement("div");
	document.querySelector('body').appendChild(alertdiv);
	alertdiv.className = "semaphore-alert";
	switch (status) {
	case 'success':
		alertdiv.className += " semaphore-alert-success"
		break;
	case 'error':
		alertdiv.className += " semaphore-alert-error";
		break;
	case 'warning':
		alertdiv.className += " semaphore-alert-warning";
		break;
	default:
		alertdiv.className += " semaphore-alert-default";
		break;
	}
	var cw = document.createElement('div');
	cw.className = 'semaphore-alert--content-wrapper';
	cw.innerHTML = text;
	var cross = document.createElement('span');
	cross.className = 'semaphore-alert--cross';
	cross.innerHTML = '×';
	cw.appendChild(cross);
	alertdiv.appendChild(cw);
	cross.addEventListener('click', function() {
		alertdiv.parentElement.removeChild(alertdiv)
	})
	return alertdiv;
}
