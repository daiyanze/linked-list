function DoubleNode (element) {
  this.element = element
  this.previous = null
  this.next = null
}

function DoubleLinkedList (element) {
  this.head = new DoubleNode(element || null)

  this.find = function (item) {
    var cursor = this.head

    while (cursor.element != item) {
      cursor = cursor.next
    }

    return cursor
  }

  this.findLast = function () {
    var cursor = this.head

    while (cursor.next != null) {
      cursor = cursor.next
    }

    return cursor
  }

  this.insert = function (element, item) {
    var newNode = new DoubleNode(element)

    // connect previous and next node
    // A <-> C
    // insert B
    // A.next -> B
    // B.previous -> A
    // B.next -> C
    // C.previous -> B
    // result in A <-> B <-> C
    var cursor = this.find(item)
    newNode.next = cursor.next
    newNode.previous = cursor
    cursor.next = newNode
  }

  this.display = function () {
    var cursor = this.head

    do {
      console.log(cursor.element)
      cursor = cursor.next
    } while (!(cursor.next == null)) {
      console.log(cursor.element)
      return
    }
  }

  this.displayReverse = function () {
    var cursor = this.findLast()

    do {
      console.log(cursor.element)
      cursor = cursor.previous
    } while (!(cursor.previous == null)) {
      console.log(cursor.previous)
      return
    }
  }

  this.remove = function (item) {
    var cursor = this.find(item)

    // conenct the previous with the next node
    // A <-> B <-> C
    // we want to remove B
    // A <- * -> C
    // A.next -> C
    // C.previous -> A
    if (cursor.next != null) {
      cursor.previous.next = cursor.next
      cursor.next.previous = cursor.previous
      cursor.next = null
      cursor.previous = null
    }
  }
}

// Usage
var list = new LinkedList(1) // LinkedList{ head: Node{1}, ... }

list.head // Node{1}

list.insert(2, 1).insert(3, 2) // 1 -> 2 -> 3, LinkedList{ head: Node{ element: 1, next: Node{ element: 2, next: ... } }, ... }

list.find(2) // Node{ element: 2, next: Node{3} }

list.findLast() // Node{ element: 1, next: Node{2} }

list.display()
// 1
// 2
// 3
// LinkedList{ head: Node{ element: 1, next: Node{2} } }

list.displayReverse()
// 3
// 2
// 1
// LinkedList{ head: Node{ element: 1, next: Node{2} } }

list.remove(2) // LinkedList{ head: Node{ element: 1, next: Node{ element: 3, next: ... } }, ... }
