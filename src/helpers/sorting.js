export default function sortData(a, b, direction) {
  const lowerCaseA = a.name.toLowerCase();
  const lowerCaseB = b.name.toLowerCase();

  if (direction === "desc") {
    if (lowerCaseA < lowerCaseB) {
      return -1;
    }

    if (lowerCaseA > lowerCaseB) {
      return 1;
    }
  } else {
    if (lowerCaseA < lowerCaseB) {
      return 1;
    }

    if (lowerCaseA > lowerCaseB) {
      return -1;
    }
  }
  return 0;
}
