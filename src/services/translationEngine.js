// Base folder path for signs
const signsBaseFolderPath = "./assets/individial_signs/";

/**
 * Creates an array of sign language image paths from given sentence.
 * @param {string} sentence - Sentence you want to be translated
 * @returns array of sign paths to sign language images
 */
export const translateToSignLanguage = (sentence) => {
  return sentence
    .toLowerCase()
    .split("")
    .filter((c) => isLetter(c))
    .map((c) => {
      return `${signsBaseFolderPath}${c}.png`;
    });
};

/** Checks if the given input is a lowercase letter */
const isLetter = (input) => {
  return input.match(/[a-z]/i);
};
