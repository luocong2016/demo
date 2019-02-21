1. 基础类型
```
## 布尔值
let isDone: boolean = false;

## 数字
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

## 字符串
let str: string = "lutz";

## 数组
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];

## 元组
let x: [string, number];
x = ['hello', 10]; // OK
x = [10, 'hello']; // Error

## 枚举
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;

## Any

## Void
function warnUser(): void {
  console.error("Error!")
}
let unusable: void = undefined

## Null 和 Undefined
let u: undefined = undefined;
let n: null = null;

## Never
function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error("Something failed");
}

function infiniteLoop(): never {
  while (true) {
  }
}

```