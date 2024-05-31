export const convertToTime = (seconds) => {
  const n = parseInt(seconds);
  if (n < 60) return `${n} seconds`;
  else if (n % 60 === 0) return `${Math.floor(n / 60)} Minutes`;
  else if (n >= 60 && n < 3600) {
    return `${Math.floor(n / 60)} Minutes ${n % 60} seconds`;
  } else if (n % 3600 === 0) return `${Math.floor(n / 3600)} Hour`;
  else return 'More than a hour';
};

export const getOptionIndex = (option) => {
  if (option === 0) return 'A';
  if (option === 1) return 'B';
  if (option === 2) return 'C';
  if (option === 3) return 'D';
};
