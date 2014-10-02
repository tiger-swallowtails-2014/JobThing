var contactFormValidations = function(){
  $('#new_contact').bootstrapValidator({
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'},
    fields: {
        'contact[first_name]': {
            validators: {
              notEmpty: {
                message: 'This field is required and cannot be empty! (Pretty please?)'
              },
              regexp: {
                regexp: /^[a-z\s]+$/i,
                  message: 'The first name can consist of alphabetical characters and spaces only'
                  }
                }
              },
        'contact[last_name]': {
            validators: {
                notEmpty: {
                  message: 'This field is required and cannot be empty! (Pretty please?)'
                    },
                regexp: {
                  regexp: /^[a-z\s]+$/i,
                    message: 'The last name can consist of alphabetical characters and spaces only'
                    }
                  }
                },
        'contact[email]': {
            validators: {
                emailAddress: {
                    message: 'Please provide a valid e-mail address!'
                    }
                  }
                },
        'contact[phone_number]': {
            validators: {
                regexp: {
                  regexp: /(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}/,
                    message: 'Phone number must contain spaces, dashes, or periods'
                    }
                  }
                }
             }

   }).on('success.form.bv', function(){
    Contact.bindNewSubmitButton();
   });
}