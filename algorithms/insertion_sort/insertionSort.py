def insertionSort(arr):
    n = len(arr)
    i = 1

    while i < n:
        j = i
        i += 1
        while j > 0 and arr[j-1] > arr[j]:
            arr[j-1], arr[j] = arr[j], arr[j-1]
            j -= 1
    return arr