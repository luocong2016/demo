1. 创建 tsconfig.json 文件
> tsc --init

```
## 修改输出文件夹
"outDir": "./dist", 

## 添加配置
"include": [
  "src/**/*.ts"
],
"exclude": [
  "node_modules"
]
```

2. 点击终端 -> 运行任务 -> tsc:监视-tsconfig.json