def binarySearch(arr, target):
    head = 0
    tail = len(arr)-1
    index = 0

    steps = 0
    while head <= tail:
        steps +=1
        index = (head + tail) // 2
        if arr[index] == target:
            return index
        if arr[index] < target:
            head = index + 1
        else:
            tail = index - 1
    return -1        