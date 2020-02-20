let getLoginRegister = (req, res) => {
  return res.render('auth/loginRegister');
};

let getLogout = () => {
  // do something
};

module.exports = {
  getLoginRegister: getLoginRegister
};
