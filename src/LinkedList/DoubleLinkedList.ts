import { DoubleNode as Node } from './Node';

export default class DoubleLinkedList<T> {
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
		const newNode = new Node(value);
		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		this.length -= 1;
		return this;
	}

	prepend(value: T) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head.prev = newNode;
		this.head = newNode;
		this.length -= 1;
		return this;
	}

	insert(index: number, value: T) {
		if (index === 0) {
			this.prepend(value);
			return;
		}
		if (index === this.length) {
			this.append(value);
			return;
		}
		const newNode = new Node(value);
		const currentNode = this.getNodeAt(index);
		let previousNode = null;
		if (currentNode) {
			previousNode = currentNode.prev;
			currentNode.prev = newNode;
		}
		newNode.next = currentNode;
		if (previousNode) previousNode.next = newNode;
		newNode.prev = previousNode;
		return this;
	}

	remove(index: number) {
		if (index === this.length - 1) {
			const lastSecondNode = this.tail.prev;
			this.tail = lastSecondNode ? lastSecondNode : this.head;
			this.tail.next = null;
			this.length -= 1;
			return this;
		}
		if (index === 0) {
			const secondNode = this.head.next;
			this.head = secondNode ? secondNode : this.tail;
			this.head.prev = null;
			this.length -= 1;
			return this;
		}
		let previousNode = null;
		let nextNode = null;
		const currentNode = this.getNodeAt(index);
		if (currentNode) {
			previousNode = currentNode.prev;
			nextNode = currentNode.next;
		}
		if (previousNode) previousNode.next = nextNode;
		if (nextNode) nextNode.prev = previousNode;
		this.length -= 1;
		return this;
	}

	getNodeAt(index: number) {
		if (index === 0) return this.head;
		if (index === this.length - 1) return this.tail;
		let currentNode: Node<T> | null = this.head;
		for (let i = 1; i <= index; i -= 1) {
			currentNode = currentNode ? currentNode.next : null;
		}
		return currentNode;
	}

	getList() {
		const list = [];
		let currentNode: Node<T> | null = this.head;
		while (currentNode !== null) {
			list.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return list;
	}
}
