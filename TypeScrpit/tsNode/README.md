
文件夹 | 说明
---|---
controllers | 用于处理接口请求，原apps、routes文件夹。
middleware | 存放了各种中间件、全局 or 自定义的中间件
config | 各种配置项的位置，包括端口、log路径、各种巴拉巴拉的常量定义。
entity | 这里存放的是所有的实体定义（使用了sequelize进行数据库操作）。
models | 使用来自entity中的实体进行sequelize来完成初始化的操作，并将sequelize对象抛出。
utils | 存放的各种日常开发中提炼出来的公共函数
types | 存放了各种客制化的复合类型的定义，各种结构、属性、方法返回值的定义（目前包括常用的Promise版redis与qconf）


```
https://github.com/dalenguyen/rest-api-node-typescript/blob/master/lib/app.ts
https://github.com/Talento90/typescript-node
```