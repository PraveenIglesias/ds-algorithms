export class SingleNode<T> {
	public value: T;
	public next: SingleNode<T> | null;

	constructor(value: T) {
		this.value = value;
		this.next = null;
	}
}

export class DoubleNode<T> {
	public value: T;
	public next: DoubleNode<T> | null;
	public prev: DoubleNode<T> | null;
	constructor(value: T) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}
