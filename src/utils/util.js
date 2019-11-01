export default (str, maxlen) => {
  if (str.length > maxlen) {
    return `${str.slice(0, maxlen)} ...`;
  }
  return str;
};
