class MinClass<T> {
  public list: T[] = []

  add(val: T): void {
    this.list.push(val)
  }

  remove(val: T): void {
    this.list = this.list.filter(item => item != val)
  }

  min(): T | null {
    const len = this.list.length

    if (len < 1) {
      return null
    }

    let min = this.list[0]

    this.list.forEach(item => {
      if (min > item) {
        min = item
      }
    })

    return min
  }
}
