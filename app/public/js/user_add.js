(function userAdd() {
  
  const form = document.getElementById('form_user_add');
  const submitBtn = form.querySelector('button');
  let inputs = document.querySelectorAll('input');
  inputs = Array.from(inputs);

  form.setAttribute('novalidate', true);

  inputs.forEach(input => {
    input.addEventListener('blur', function(e) {
      initInput(e.target);
    });
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkInputs();

    const invalidInputs = form.querySelectorAll('.is-invalid');

    if(invalidInputs.length) {
      submitBtn.disabled = true;
      return;
    };

    form.submit();

  });

  function initInput(target) {

    const inputName = target.getAttribute('name');

    switch(inputName) {
      case 'name':
        checkName(target);
        break;
      case 'email':
        checkEmail(target);
        break;
      case 'password':
        checkPassword(target);
        break;
      case 'confirm_password':
        checkPasswordConfirmation(target);
        break;
      default:
        console.log('default');
        break;
    }

  }

  function checkInputs() {
    checkName(form.querySelector('input[name="name"]'));
    checkEmail(form.querySelector('input[name="email"]'));
    checkPassword(form.querySelector('input[name="password"]'));
    checkPasswordConfirmation(form.querySelector('input[name="confirm_password"]'));
  }

  function invalidEntry(entry) {

    if (entry.includes('<')) {
      return true;
    }
    return false;

  }

  function isEmpty(entry) {

    if(entry === '' || entry === null) {
      return true;
    }
    return false;

  }

  function flagInvalid(target) {

    target.classList.remove('is-valid');
    target.classList.add('is-invalid');
    submitBtn.disabled = true;

  }

  function flagValid(target) {

    target.classList.remove('is-invalid');
    target.classList.add('is-valid');
    submitBtn.disabled = false;

  }    

  function checkName(target) {
    const value = target.value;

    if(invalidEntry(value) || isEmpty(value)) {
      flagInvalid(target);
      return;
    }

    flagValid(target);

  }

  function checkEmail(target) {
    const value = target.value;
    const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ? flagValid(target) : flagInvalid(target);

    if(invalidEntry(value) || isEmpty(value)) {
      flagInvalid(target);
      return;
    }

    isEmail;

  }  
  
  function checkPassword(target) {
    const value = target.value;

    if(invalidEntry(value) || value.length < 6 || value.length > 16) {
      flagInvalid(target);
      return;
    }

    flagValid(target);

  }

  function checkPasswordConfirmation(target) {
    const pwd = document.querySelector('input[name="password"]');
    const value = target.value;
    
    if(pwd.value !== value) {
      flagInvalid(target);
      return;
    }

    flagValid(target);

  }
  
})();