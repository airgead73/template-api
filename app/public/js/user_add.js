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
        console.log('input name');
        break;
      case 'email':
        console.log('input email');
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
  
  
})();