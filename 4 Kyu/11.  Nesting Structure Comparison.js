// Link : https://www.codewars.com/kata/520446778469526ec0000001

Array.prototype.sameStructureAs = function (other) {
  // Inisiasi
  const isArray = Array.isArray;
  function compareStructure(arr1, arr2) {
    // INTINYA JIKA NILAINYA FALSE BERARTI ADA STRUKTUR YANG TIDAK SAMA KEMUDIAN PROSES LOOP BERHENTI

    // Cek jika keduanya bernilai primitive
    if (!isArray(arr1) && !isArray(arr2)) {
      return true;
    }

    // Cek jika keduanya tidak bertipe sama
    if (isArray(arr1) !== isArray(arr2)) {
      return false;
    }

    // Cek jika keduanya keduannya adalah array namun memiliki panjang yang tidak sama
    if (arr1.length !== arr2.length) {
      return false;
    }

    // Pada tahap ini keduanya adalah array, maka perlu pengecekan lebih jauh
    for (let i = 0; i < arr1.length; i++) {
      if (compareStructure(arr1[i], arr2[i]) === false) {
        return false;
      }
    }
    return true;
  }

  return compareStructure(this, other);
};

// Example Usage:
console.log([1, [1, 1]].sameStructureAs([2, [2, 2]])); // true
console.log([1, [1, 1]].sameStructureAs([2, 2, 2])); // false
console.log([1, [1, 1]].sameStructureAs([2, [2]])); // false
console.log([1, [1, [1, 1]]].sameStructureAs([2, [2, [2, 2]]])); // true
console.log([].sameStructureAs([])); // true
console.log([1, []].sameStructureAs([1, 1])); // false
console.log([[[], []]].sameStructureAs([[1, 1]])); // false
