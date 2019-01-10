```
> create-react-app react-web
> cd react-web

## 暴露配置文件(tip: 需要先提交仓库)
+ config
+ scripts

> yarn eject

## 安装依赖包
> yarn add antd react-router-dom
> yarn add --dev babel-plugin-import

## 修改 package.json
...
  "babel": {
      "presets": [
        "react-app"
      ],
+     "plugins":[["import", {"libraryName": "antd", "style": "css"}]]
    }
...

## 使用proxy
## 修改 package.json 添加
"proxy": {
  "/api": {
    "target": "xxx",
    "changeOrigin": true
  }
}

```