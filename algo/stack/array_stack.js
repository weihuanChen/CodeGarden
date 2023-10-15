class ArrayStack {
  #stack;
  constructor() {
    this.#stack = [];
  }

  /** 获取栈长 */
  get size() {
    return this.#stack.length;
  }
  /** 判断栈是否为空 */
  empty() {
    if (this.empty()) {
      throw new Error("栈为空");
    }
    return this.#stack.length === 0;
  }
  /** 入栈 */
  push(v) {
    this.#stack.push(v);
  }
  /** 出栈 */
  pop() {
    if (this.empty()) {
      throw new Error("栈为空");
    }
    return this.#stack.pop();
  }
  /** 访问栈顶 */
  top() {
    if (this.empty()) {
      throw new Error("栈为空");
    }
    return this.#stack[this.#stack.length - 1];
  }
  /** 访问栈底 */
  bottom(){
    if (this.empty()) {
      throw new Error("栈为空")
    }
    return this.$stack[0]
  }
  toArray() {
    return this.#stack;
  }
}
