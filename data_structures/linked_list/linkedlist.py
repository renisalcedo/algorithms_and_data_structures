#!/usr/bin/env python
class Node():
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList():
    def __init__(self, head=None):
        self.head = head

    def append(self, value):
        current = self.head
        if self.head:
            while current.next:
                current = current.next
            current.next = value
        else:
            self.head = value

    def prepend(self, value):
        current = self.head
        value.next = current
        self.head = value

    def list_len(self):
        current = self.head
        count = 0
        while current:
            count += 1
            current = current.next
        return count

    def find_position(self, position):
        current = self.head
        counter = 1
        if position < counter:
            return None
        elif position == counter:
            return self.head
        else:
            while current:
                if position == counter:
                    return current
                else:
                    counter += 1
                    current = current.next

    def insert(self, new_element, position):
        current = self.head
        counter = 1
        while counter < position:
            if counter == position-1:
                new_element.next = current.next
                current.next = new_element
            counter += 1
            current = current.next

    def delete(self, value):
        current = self.head
        previous = None
        while current.value != value and current.next:
            previous = current
            current = current.next
        if current.value == value:
            if previous:
                previous.next = current.next
            else:
                self.head = current.next