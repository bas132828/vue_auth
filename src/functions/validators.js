const hasUppercase = (val) => /[A-Z].*[A-Z]/.test(val);
const hasSpecialChar = (val) => /[$%#]/.test(val);

export { hasUppercase, hasSpecialChar };
