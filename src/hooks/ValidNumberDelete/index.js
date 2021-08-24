export function ValidNumberDelete(index) {
  if (
    index !== "" &&
    !isNaN(parseFloat(index)) &&
    isFinite(index) &&
    index.length === 10
  ) {
    return true;
  } else {
    return false;
  }
}
