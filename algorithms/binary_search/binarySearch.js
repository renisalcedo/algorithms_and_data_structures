function binarySearch(array, target) {
  let head = 0
  let tail = array.length - 1
  let index = 0

  while (head <= tail) {
    index = Math.floor((head + tail) / 2)
    if (array[index] === target) {
      return index
    }
    if (array[index] < target) {
      head = index + 1
    } else {
      tail = index - 1
    }
  }
  return -1
}
