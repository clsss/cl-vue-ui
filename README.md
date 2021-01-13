# cl-vue-ui

> [Coding WebHook](https://help.coding.net/docs/project/open/webhook.html) + docker 进行自动化部署

## 自动化部署步骤

- 使用 node 编辑 hook 服务；
  - 服务端/home/cl/webhooks/ 中进行存放独立的 webhooks 服务
  - 监听git推送的post请求，进行更新拉取代码 
- 本地进行推送操作（git push）
  - 1. 触发上面的hook
  - 2. 删除 projectDir 路径下的项目
  - 3. git clone 新项目
  - 4. docker build
  - 5. 销毁 docker container (old)
  - 6. 重新运行 docker run container （根据根目录的Dockerfile进行构建）
  - 7. 新增删除为none的镜像
  
> TIP: 
> - 服务端build 需要使用 @vue/cli-service【yarn global add vue-cli】
> - 项目名：${data.repository.name}【cl-vue-ui】是通过push本地代码触发才会有的；测试ping阶段不存在该字段。
> - cwd: 可指定子进程的当前工作目录
> - projectDir: '/home/cl/cl-vue-ui' 即项目地址
> - hook服务名：cl-vue-ui-hook


### 安装依赖
```
yarn install
```

### 本地启动
```
yarn serve
```

### 打包上线; （Compiles and minifies for production）
```
yarn build
```

### 跑测试用例;（Run your unit tests）
```
yarn test:unit
```

### eslints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

test4
