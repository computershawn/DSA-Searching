class NodeItem {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
  }


  peek() {
    // If there is nothing in the stack
    if (!this.first) {
      console.log(':: PEEK | Queue is empty')
      return
    }
    
    // Otherwise return the value
    console.log(`:: PEEK | '${this.first.value}'`)
  }

  enqueue(value) {
    const newNode = new NodeItem(value)

    // If empty...
    if (!this.first) {
      this.first = newNode
    }

    // Otherwise...
    if (this.last) {
      this.last.next = newNode
      this.last = newNode
    }

    console.log(`:: ENQUEUE | Added '${value}'`)
  }

  deQueue() {
    if (!this.first){
      console.log('Queue is empty')
    }
    const newNode = this.first
    this.first = this.first.next
    if(newNode === this.last) {
      this.last = null
    }
    return newNode.value
  }
}

module.exports = Queue