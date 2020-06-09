import surligne from './surligne';

export const verifField = (champ) => {
  if (champ.value.length < 2) {
    surligne(champ, true);
    return false;
  }
  surligne(champ, false);
  return true;
};

export const verifEmail = (champ) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  if (!regex.test(champ.value)) {
    surligne(champ, true);
    return false;
  }
  surligne(champ, false);
  return true;
};

export const verifPostalCode = (champ) => {
  const codeInt = parseInt(champ.value);

  if ((champ.value.length == 5) && Number.isInteger(codeInt)) {
    surligne(champ, false);
    return true;
  }
  surligne(champ, true);
  return false;
};

export const verifPassword = (password, passwordbis) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&*])(?=.{8,})/;

  if (regex.test(password.value) && (password.value === passwordbis.value)) {
    surligne(password, false);
    surligne(passwordbis, false);
    return true;
  }
  surligne(password, true);
  surligne(passwordbis, true);
  return false;
};

export const handleBlurField = (evt) => {
  if (evt.currentTarget.value.length < 2) {
    surligne(evt.currentTarget, true);
    return false;
  }
  surligne(evt.currentTarget, false);
  return true;
};

export const handleBlurPostalCode = (evt) => {
  const codeInt = parseInt(evt.currentTarget.value);

  if ((evt.currentTarget.value.length == 5) && Number.isInteger(codeInt)) {
    surligne(evt.currentTarget, false);
    return true;
  }
  surligne(evt.currentTarget, true);
  return false;
};

export const handleBlurEmail = (evt) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  if (!regex.test(evt.currentTarget.value)) {
    surligne(evt.currentTarget, true);
    return false;
  }
  surligne(evt.currentTarget, false);
  return true;
};

export const handleBlurPassword = (evt) => {
  const passTest = evt.currentTarget.value;
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  if (regex.test(passTest)) {
    surligne(evt.currentTarget, false);
    return true;

  }
  console.log('Pass Ko');
  surligne(evt.currentTarget, true);
  return false;
};

  
export const handleBlurPasswordBis = (evt) => {
  const passTest = evt.currentTarget.value;
  const firstPassword = document.querySelector('#password');
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  if (regex.test(passTest) && passTest === firstPassword.value) {
    surligne(evt.currentTarget, false);
    surligne(firstPassword, false);
    return true;
  }
  surligne(evt.currentTarget, true);
  surligne(firstPassword, true);
  return false;
};
