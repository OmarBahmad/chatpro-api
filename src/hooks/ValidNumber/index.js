export function ValidNumber(index) {
  if (
    index !== '' &&
    !isNaN(parseFloat(index)) &&
    isFinite(index) &&
    index.length >= 10 &&
    index.length < 12
  ) {
    return true;
  } else {
    return false;
  }
}
