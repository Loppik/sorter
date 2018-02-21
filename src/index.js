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

const AGE_COMPARATOR = (left, right) => left.age - right.age;
const REVERSE_COMPARATOR = (left, right) => right - left;
const STRINGIFY_COMPARATOR = (left, right) => JSON.stringify(left, null, 2).length - JSON.stringify(right, null, 2).length;

let sorter = new Sorter();

sorter.add({ age: 30, name: 'Dzmitry' });
sorter.add({ age: 40, name: 'Alex' });

sorter.setComparator(AGE_COMPARATOR);
sorter.sort([1, 0]);

sorter.add(2);
sorter.add(10);

sorter.setComparator(REVERSE_COMPARATOR);
sorter.sort([2, 3]);

sorter.setComparator(STRINGIFY_COMPARATOR);
sorter.add('hello');
sorter.add('hello world');

sorter.sort([0, 2]);
sorter.sort([1, 3]);
sorter.sort([5, 2]);

console.log(sorter.at(0));
console.log(sorter.at(1));
console.log(sorter.at(2));
console.log(sorter.at(3));
console.log(sorter.at(4));
console.log(sorter.at(5));
console.log(JSON.stringify(sorter.at(4), null, 2).length + " - " + JSON.stringify(sorter.at(5), null, 2).length);



// sorter.add({ age: 20, name: 'Alex' });
// sorter.sort([0]);
// sorter.sort([0]);
//
// sorter.add({ age: 5, course: 'Rolling Scopes' });
// sorter.add({ age: 18, smth: 'Anything' });
// sorter.add({ age: 7, smth: 'Some' });
//
// sorter.setComparator(STRINGIFY_COMPARATOR);
// sorter.sort([2, 1]);
// sorter.sort([3, 1]);
//
// console.log(sorter.at(0));
// console.log(sorter.at(1));
// console.log(sorter.at(2));
// console.log(sorter.at(3));
// console.log(JSON.stringify(sorter.at(2), null, 2).length + " - " + JSON.stringify(sorter.at(3), null, 2).length)

module.exports = Sorter;