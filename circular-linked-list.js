function Node (element) {
  this.element = element
  this.next = null
}

// circular linked list
// almost same to the linked list
function LinkedList (headElement) {
  this.head = new Node(headElement || null)
  this.head.next = this.head

  this.find = function (item) {
    var cursor = this.head

    while (cursor.element != item) {
      cursor = cursor.next
    }

    return cursor
  }

  this.findPrev = function (item) {
    var cursor = this.head

    while (cursor.next != null && cursor.next.element != item) {
      cursor = cursor.next
    }

    return cursor
  }

  this.insert = function (element, item) {
    var newNode = new Node(element)

    var cursor = this.find(item)
    newNode.next = cursor.next
    cursor.next = newNode

    return this
  }

  this.display = function () {
    var cursor = this.head

    do {
      console.log(cursor.element)
      cursor = cursor.next
    } while (!(cursor.next == null)) {
      console.log(cursor.element)
      return this
    }
  }

  this.remove = function (item) {
    var cursor = this.findPrev(item)

    // connect previous and next node
    // A -> B -> C
    // remove B, connect A & C
    // result in A -> C
    if (cursor.next != null) {
      cursor.next = cursor.next.next
    }

    return this
  }
}

// Usage
var list = new LinkedList(1) // LinkedList{ head: Node{1}, ... }

list.head // Node{1}

list.insert(2, 1).insert(3, 2) // 1 -> 2 -> 3, LinkedList{ head: Node{ element: 1, next: Node{ element: 2, next: ... } }, ... }

list.find(2) // Node{ element: 2, next: Node{3} }

list.findPrev(2) // Node{ element: 1, next: Node{2} }

list.display()
// 1
// 2
// 3
// LinkedList{ head: Node{ element: 1, next: Node{2} } }

list.remove(2) // LinkedList{ head: Node{ element: 1, next: Node{ element: 3, next: ... } }, ... }
