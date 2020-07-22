import { SingleNode as Node } from './Node';

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
		const newNode = new Node(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length += 1;
		return this;
	}
	prepend(value: T) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.length += 1;
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
		const previousNode = this.getNodeAt(index - 1);
		const currentNode = previousNode?.next;
		const newNode = new Node(value);
		if (previousNode) {
			previousNode.next = newNode;
		}
		newNode.next = currentNode ? currentNode : null;
		this.length += 1;
		return this;
	}

	remove(index: number) {
		if (index === this.length - 1) {
			const lastSecondNode = this.getNodeAt(index - 1);
			this.tail = lastSecondNode ? lastSecondNode : this.head;
			this.tail.next = null;
			this.length -= 1;
			return this;
		}
		if (index === 0) {
			const secondNode = this.head.next;
			this.head = secondNode ? secondNode : this.tail;
			this.length -= 1;
			return this;
		}
		const previousNode = this.getNodeAt(index - 1);
		const nextNode = this.getNodeAt(index + 1);
		if (previousNode && previousNode?.next !== null) {
			previousNode.next = nextNode;
		}
		this.length -= 1;
		return this;
	}

	getNodeAt(index: number) {
		if (index === 0) return this.head;
		if (index === this.length - 1) return this.tail;
		let currentNode: Node<T> | null = this.head;
		for (let i = 1; i <= index; i += 1) {
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

	reverse() {
		let currentNode = this.head;
		this.tail = this.head;
		let temp: Node<T> | null = currentNode.next;
		while (temp) {
			const nextNode = temp;
			temp = nextNode.next;
			nextNode.next = currentNode;
			currentNode = nextNode;
		}
		this.head.next = null;
		this.head = currentNode;

		return this;
	}
}
