/** 链表栈 */
class LinkedListStack {
  #stackPeek;
  #stkSize = 0;

  constructor() {
    this.#stackPeek = null;
  }
  /** 获取栈的长度 */
  get size() {
    return this.#stackPeek;
  }
  isEmpty() {
    return this.size === 0;
  }
  /** 入栈 */
  push(num) {
    const node = new ListNode(num);
    node.next = this.#stackPeek;
    this.#stackPeek = node;
    this.#stkSize++;
  }
  /** 出 */
  pop() {
    // 访问栈顶
    const num = this.peek();
    this.#stackPeek = this.#stackPeek.next;
    this.#stkSize--;
    return num;
  }
  peek() {
    if (!this.#stackPeek) {
      throw new Error("栈为空");
    }
    return this.#stackPeek.val;
  }
  /** 将链表转化为array */
  toArray() {
    let node = this.#stackPeek;
    const res = new Array(this.size);
    // 递减倒推
    for (let i = res.length - 1; i >= 0; i--) {
      res[i] = node.val;
      node = node.next;
    }
    return res;
  }
}
