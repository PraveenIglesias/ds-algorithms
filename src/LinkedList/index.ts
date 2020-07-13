import Node from './Node';
// 10 -> 5 -> 1
// 10, adr(5) - 5, adr(1) - 1, null
export default class LinkedList<T> {
    private head: Node<T>;
    private tail: Node<T>;
    private length: number;

    constructor(value: T) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    // a diagram of nodes will make it more clear to understand append, prepend

    append(value: T) {
        let newNode =  new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value: T) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

}


