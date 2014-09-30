$(document).ready(function() {
    $('.signin form').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            email: {
                validators: {
                    notEmpty: {
                        message: 'Don\'t leave this box blank... c\'mon now... '
                    },
                    emailAddress: {
                        message: 'Please provide a valid e-mail address, yo.'
                    }
                }
             },
            password: {
              validators:{
                notEmpty: {
                  message: 'No empty passwords!!'
                }
              }
            }
        }
    });
  $('#new_user').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            'user[first_name]': {
                validators: {
                    notEmpty: {
                        message: 'Your first name can\'t be blank.. can it?'
                    }
                  }
                },
            'user[last_name]': {
                validators: {
                  notEmpty: {
                    message: "Give us a last name!"
                  }
                }
             },
            'user[username]': {
              validators: {
                notEmpty: {
                  message: "Username plz"
                }
              }
            },
            'user[password]': {
              validators:{
                notEmpty: {
                  message: 'No empty passwords!!'
                },
              stringLength: {
                min: 6,
                max: 30,
                message: 'Make your password a good one! (Must be between 6 and 30 characters)'
              }
            }
          },
          'user[email]': {
              validators: {
                    notEmpty: {
                        message: 'Don\'t leave this box blank... c\'mon now...'
                    },
                    emailAddress: {
                        message: 'Please provide a valid e-mail address, yo.'
                    }
                }
            }
        }
    });








});
