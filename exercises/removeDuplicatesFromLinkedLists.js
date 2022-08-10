const removeDuplicatesFromLinkedLists = (linkedList) => {
  let node = linkedList;

  while (node && node.next) {
    if (node.value === node.next.value) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }

  return linkedList;
};
