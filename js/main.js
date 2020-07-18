const plainPassword = 'I SOLEMNLY SWEAR THAT I AM UP TO NO GOOD',
      encryptedPassword = encrypt(plainPassword),
      uPassword = document.querySelector('.password');

const check = setInterval(() => {
	if(uPassword.value == plainPassword || uPassword.value == encryptedPassword) buildUI();
}, 500);


function buildUI() {
	clearInterval(check);
	document.querySelector('main').removeChild(document.querySelector('form'));
	document.querySelector('.app-header').textContent = 'CODE P.12.01.0';
	document.querySelectorAll('.invisible').forEach(e => e.classList.remove('invisible'));
	
	const container = document.createElement('form');
	const enHeading = document.createElement('h3');
	enHeading.textContent = 'Encrypt';
	const enPlainTxtContainer = document.createElement('div');
	enPlainTxtContainer.className = 'form-group';
	const enEncryptedTxtContainer = document.createElement('div');
	enEncryptedTxtContainer.className ='form-group';
	enEncryptedTxtContainer.style.marginBottom = '8rem';
	const enPlainTxt = document.createElement('textarea');
	enPlainTxt.className = 'form-control enPlainTxt';
	enPlainTxt.placeholder = 'Plain Text';
	enPlainTxt.style.backgroundColor = '#000B15';
	const enEncryptedTxt = document.createElement('textarea');
	enEncryptedTxt.className = 'form-control enEncryptedTxt';
	enEncryptedTxt.placeholder = 'Encrypted Text';
	enEncryptedTxt.disabled = true;
	enEncryptedTxt.style.backgroundColor = '#000B15';
	const encryptBtn = document.createElement('input');	
	encryptBtn.type = 'button';
	encryptBtn.value = 'Encrypt';
	encryptBtn.className = 'btn btn-danger';

	container.appendChild(enHeading);
	enPlainTxtContainer.appendChild(enPlainTxt);
	enEncryptedTxtContainer.appendChild(enEncryptedTxt);
	container.appendChild(enPlainTxtContainer);
	container.appendChild(encryptBtn);
	container.appendChild(enEncryptedTxtContainer);


			

const deHeading = document.createElement('h3');
	deHeading.textContent = 'Decrypt';
	const dePlainTxtContainer = document.createElement('div');
	dePlainTxtContainer.className = 'form-group';
	const deEncryptedTxtContainer = document.createElement('div');
	deEncryptedTxtContainer.className ='form-group';
	const dePlainTxt = document.createElement('textarea');
	dePlainTxt.className = 'form-control dePlainTxt';
	dePlainTxt.placeholder = 'Plain Text';
	dePlainTxt.disabled = true;
	dePlainTxt.style.backgroundColor = '#000B15';
	const deEncryptedTxt = document.createElement('textarea');
	deEncryptedTxt.className = 'form-control deEncryptedTxt';
	deEncryptedTxt.placeholder = 'Encrypted Text';
	deEncryptedTxt.style.backgroundColor = '#000B15';
	const decryptBtn = document.createElement('input');	
	decryptBtn.type = 'button';
	decryptBtn.value = 'Decrypt';
	decryptBtn.className = 'btn btn-danger';

	container.appendChild(deHeading);
	dePlainTxtContainer.appendChild(dePlainTxt);
	deEncryptedTxtContainer.appendChild(deEncryptedTxt);
	container.appendChild(deEncryptedTxtContainer);
	container.appendChild(decryptBtn);
	container.appendChild(dePlainTxtContainer);






	document.querySelector('main').appendChild(container);



	encryptBtn.addEventListener('click', () => enEncryptedTxt.value = encrypt(enPlainTxt.value));

	decryptBtn.addEventListener('click', () => dePlainTxt.value = decrypt(deEncryptedTxt.value));
}



