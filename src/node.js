export default class Node {
  constructor(position, parent) {
    this.position = position;
    this.parent = parent;
    this.path = this.getPath();
  }

  getPath() {
    const path = [];
    let parent = this.parent;
    while (parent) {
      path.unshift(parent.position);
      parent = parent.parent;
    }
    return path;
  }
}
