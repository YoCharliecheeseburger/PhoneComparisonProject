const FormatArray = (key, arr) => {
  switch (key) {
    case "camera":
      return arr.map(number => `${number} MP`).join(" + ");
    case "ram":
      return arr.map(number => (number >= 512 ? `${number} MB` : `${number} GB`)).join(" / ");
    case "storage":
      return arr.map(number => `${number} GB`).join(" / ");
    default:
      return arr.join(" / ");
  }
};

export default FormatArray;