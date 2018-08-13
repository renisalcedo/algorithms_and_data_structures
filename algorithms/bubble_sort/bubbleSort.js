function bubbleSort(arr) {
  const length = arr.length
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }

  return arr
}
