export const verifField = (champ) => {
  if (champ.value.length < 2) {
    return false;
  }
  return true;
};

export const verifEmail = (champ) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  if (!regex.test(champ.value)) {
    return false;
  }
  return true;
};

export const verifPostalCode = (champ) => {
  const codeInt = parseInt(champ.value);

  if ((champ.value.length == 5) && Number.isInteger(codeInt)) {
    return true;
  }
  return false;
};

export const verifPassword = (password, passwordbis) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
/* 
  console.log(password.value);
  console.log(passwordbis.value); */
  if (regex.test(password.value) && (password.value === passwordbis.value)) {
    console.log('Pass Ok');
    return true;
  }
  console.log('Pass Ko');
  return false;
};
