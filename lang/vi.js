export const transValidation = {
  email_incorrect: "Email phải có dạng example@gmail.com.",
  gender_incorrect: "Trường giới tính bị sai.",
  password_incorrect: "Mật khẩu phải chứa ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.",
  password_confirmation_incorrect: "Nhập lại mật khẩu không chính xác."
};

export const transErrors = {
  account_in_use: "Email này đã được sử dụng.",
  account_removed: "Tài khoản này đã bị gỡ khỏi hệ thống, nếu tin rằng điều này là hiểu nhầm, vui lòng liên hệ với bộ phận hỗ trợ của chúng tôi.",
  account_not_active: "Email này đã được đăng ký nhưng chưa được kích hoạt tài khoản.",
  token_undefined: "Token không tồn tại!"
}

export const transSuccess = {
  userCreated: (userEmail) => {
    return `Tài khoản <strong>${userEmail}</strong> đã được tạo, vui lòng kiểm tra email để kích hoạt tài khoản, xin cảm ơn.`;
  },
  account_actived: "Kích hoạt tài khoản thành công, bạn có thể đăng nhập vào ứng dụng."
}

export const transMail = {
  subject: "Nodejs Live Chat: Xác nhận kích hoạt tài khoản.",
  template: (linkVerify) => {
    return `
      <h2>Bạn nhận được email này vì đã đăng ký tài khoản trên ứng dụng Nodejs Live Chat.</h2>
      <h3>Vui lòng nhấp vào liên kết bên dưới để xác nhận kích hoạt tài khoản.</h3>
      <h3><a href="${linkVerify}" target="blank">${linkVerify}</a></h3>
      <h4>Nếu tin rằng email này là nhầm lẫn, hãy bỏ qua nó. Trân trọng !</h4>
    `;
  },
  send_failed: "Có lỗi trong quá trình gửi email, vui lòng liên hệ với bộ phận hỗ trợ của chúng tôi."
}
