function normalize({ id, email, name }) {
  return { id, email, name };
}

function validateEmail(email) {
  const emailPattern = /^[\w.+-]+@([\w-]+\.){1,3}[\w-]{2,}$/;

  if (!email) {
    return 'Email is required';
  }

  if (!emailPattern.test(email)) {
    return 'Email is not valid';
  }

  return null;
}

function validatePassword(password) {
  if (!password) {
    return 'Password is required';
  }

  if (password.length < 6) {
    return 'At least 6 characters';
  }

  return null;
}

function validateName(name) {
  if (!name) {
    return 'Name is required';
  }

  if (name.trim().length === 0) {
    return 'Name cannot be empty';
  }

  return null;
}

export const userService = {
  normalize,
  validateEmail,
  validatePassword,
  validateName,
};
