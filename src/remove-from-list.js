const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 * 
 * дан односвязный список целых чисел l и целое число k,
 * удалить все элементы из списка l, имеющие значение, равное k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * Отдельно - связанные списки уже определены с помощью интерфейса
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  // l = [3, 1, 2, 3, 4, 5] and k = 3 => [1, 2, 4, 5]
  //      [1, 2, 3, 3, 4, 5] 3 => [1, 2, 4, 5]

  console.log(l.value);
  if (l.value === k) l = l.next;
  
  let nodeTemporal = l.next;
  while (nodeTemporal) {
    nodeTemporal.next?.value === k
      ? nodeTemporal.next = nodeTemporal.next.next
      : nodeTemporal = nodeTemporal.next;
  }
  return l;
}

module.exports = {
  removeKFromList
};
