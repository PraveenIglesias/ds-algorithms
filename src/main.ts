import SingleLinkedList from './LinkedList/SingleLinkedList';
import DoubleLinkedList from './LinkedList/DoubleLinkedList';

const ll = new SingleLinkedList(3);
ll.append(4);
ll.append(6);
ll.append(8); // 3,4,6,8;
ll.insert(2, 5); // 3,4,5,6,8
ll.remove(2);
ll.reverse();
console.log('List: ', ll.getList());

// const dll = new DoubleLinkedList(3);
// dll.append(4);
// dll.append(6);
// dll.append(8); // 3,4,6,8;
// dll.insert(2, 5); // 3,4,5,6,8
// dll.remove(2);
// console.log('DList: ', dll.getList());
