class Sorter {

  constructor() {
    this.elems = [];
    this.len = 0;
    this.comparator = (a, b) => a - b;
  }

  add(element) {
    this.elements.push(element);
    this.length += 1;
  }

  at(index) {
    return this.elements[index];
  }

  toArray() {
    return this.elements;
  }

  sort(indices) {
    var start = indices[0];
    var end = indices[indices.length - 1];
    if (start > end) {
        [start, end] = [end, start]
    }
    this.quickSort(start, end);
  }

  quickSort(start, end) {
    if (end < start) {
      return;
    }
    this.swap(start, parseInt(Math.random()*(end - start) + start));
    var middle = start;
    var i = start;
    var j = end + 1;
    while (true) {
      do {
        i += 1;
      } while (i <= end && this.comparator(this.elements[i], this.elements[middle]) < 0);

      do {
        j -= 1;
      } while (this.comparator(this.elements[j], this.elements[middle]) > 0);

      if (i > j) {
        break;
      }

      this.swap(i, j);
    }
    this.swap(start, j);
    this.quickSort(start, j - 1);
    this.quickSort(j + 1, end);
  }

  swap(index1, index2) {
    var temp = this.elements[index1];
    this.elements[index1] = this.elements[index2];
    this.elements[index2] = temp;
  }



  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }

  set length(length) {
      this.len = length;
  }

  get length() {
      return this.len;
  }

  set elements(elements) {
      this.elems = elements;
  }

  get elements() {
      return this.elems;
  }

  get getValue() {
    return value
  }

}


module.exports = Sorter;