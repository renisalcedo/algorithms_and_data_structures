class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
    this.length = 0
  }

  // Will Append New Node at the end of the list
  append(node) {
    let current = this.head
    let newNode = new Node(node)

    // If head is empty new node is the head
    if (!this.head) {
      this.head = newNode
      this.length++
      return this.head
    }

    while (current.next) {
      current = current.next
    }
    current.next = newNode
    this.length++
    return newNode
  }

  // Will Prepend New Node at the beginning of the list
  prepend(node) {
    let newNode = new Node(node)

    newNode.next = this.head
    this.head = newNode
    this.length++
    return this.head
  }

  // WILL FIND A NODE AT A POSITION
  find(position) {
    let current = this.head
    let counter = 1
    while (counter <= position && current.next) {
      if (counter === position) {
        return current
      }
      current = current.next
      counter++
    }
    return 'Not Found'
  }

  // WILL INSERT A NEW NODE AT THE SPECIFIED POSITION
  insertAt(node, position) {
    const newNode = new Node(node)
    let current = this.head
    let counter = 1
    if (position <= 1) {
      this.head = newNode
      return newNode
    }

    while (counter <= position && current.next) {
      if (counter === position - 1) {
        newNode.next = current.next
        current.next = newNode
        return newNode
      }
      current = current.next
      counter++
    }
  }

  // WILL DELETE THE NODE WITH A GIVEN VALUE
  delete(value) {
    let current = this.head
    let previous = null

    while (current.value !== value && current.next) {
      previous = current
      current = current.next
    }

    if (current.value === value) {
      if (previous) {
        previous.next = current.next
        this.length--
        return previous
      }

      this.length--
      this.head = current.next
    }
  }
}
