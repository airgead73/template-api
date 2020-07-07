(function userAdd() {
  
  const form = document.getElementById('form_user_add');
  let inputs = document.querySelectorAll('input');
  inputs = Array.from(inputs);

  form.setAttribute('novalidate', true);

  inputs.forEach(input => {
    input.addEventListener('blur', function(e) {
      initInput(e.target);
    });
  });

  function initInput(target) {

    const name = target.getAttribute('name');

    switch(name) {
      case 'name':
        checkName(target);
        break;
      case 'email':
        checkEmail(target);
        break;
      case 'password':
        console.log('input password');
        break;
      case 'confirm_password':
        console.log('input confirm password');
        break;
      default:
        console.log('default');
        break;
    }

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

  function isEmail(entry) {
    console.log(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(entry));

  }

  function checkName(target) {
    const value = target.value;

    if(invalidEntry(value) || isEmpty(value)) {
      console.log('Invalid entry');
    }

  }

  function checkEmail(target) {
    const value = target.value;
    const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ? console.log('is an email') : console.log('is NOT email');

    if(invalidEntry(value) || isEmpty(value)) {
      console.log('Invalid entry');
    }

    // if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    //   console.log('Not a valid email.');
    // }



    isEmail;


  }  
  
  
})();