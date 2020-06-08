function surligne(champ, erreur) {
  if (erreur) {
    champ.style.borderBottom = '2px solid rgba(255, 5, 5, 0.36)';
  }
  else {
    champ.style.borderBottom = '2px solid rgba(12, 185, 47, 0.64)';
  }
}

export default surligne;
