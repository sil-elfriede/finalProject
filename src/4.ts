
const randomTsCode = () => {
  const codes = ['123456789', 'abcdefghijklmnopqrstuvwxyz'];
  const randIndex = Math.floor(Math.random() * codes.length);
  return codes[randIndex];
}