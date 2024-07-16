function capTalizeFirstLetter(str: string): string {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
    .trim();
}

export const stringUtilis = {
  capTalizeFirstLetter,
};
