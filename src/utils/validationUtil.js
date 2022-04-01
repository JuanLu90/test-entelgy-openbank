export const validatePassword = (value) => {
  var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,24}/;
  return reg.test(value);
};

export const validateClue = (value) => {
  var reg = /^.{0,255}$/;
  return reg.test(value);
};
