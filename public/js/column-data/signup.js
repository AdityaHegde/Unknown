define([
], function() {

return {
  name : "signup",
  columns : [{
    name : "profile_id",
    label : "User Id",
    form : {
      moduleType : "textInput",
      maxLength : 50,
    },
    validation : {
      validations : [
        {type : 0},
        {type : 1, regex : "^[0-9a-zA-Z_]*$", negate : true, invalidMessage : "Only alphabets, numbers and '_' allowed."},
      ],
    },
  }, {
    name : "pwd",
    label : "Password",
    form : {
      moduleType : "textInput",
      maxLength : 50,
    },
    validation : {
      validations : [
        {type : 0},
        {type : 1, regex : "^[0-9a-zA-Z_]*$", negate : true, invalidMessage : "Only alphabets, numbers and '_' allowed."},
      ],
    },
  }, {
    name : "email",
    label : "Email",
    form : {
      moduleType : "textInput",
    },
    validation : {
      validations : [
        {type : 0},
      ],
    },
  }, {
    name : "givenName",
    label : "First Name",
    form : {
      moduleType : "textInput",
    },
    validation : {
      validations : [
        {type : 0},
      ],
    },
  }, {
    name : "familyName",
    label : "Last Name",
    form : {
      moduleType : "textInput",
    },
    validation : {
      validations : [
        {type : 0},
      ],
    },
  }],
  form : {},
};

});
