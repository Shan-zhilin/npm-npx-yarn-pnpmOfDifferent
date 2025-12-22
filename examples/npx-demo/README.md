# npx 演示

npx 是一个执行 npm 包命令的工具，不需要全局安装就可以运行包。

## 常用命令演示

### 1. 创建项目（脚手架工具）

```bash
# 创建 React 应用
npx create-react-app my-react-app

# 创建 Vue 应用
npx create-vue@latest my-vue-app

# 创建 Next.js 应用
npx create-next-app@latest my-next-app

# 创建 Vite 项目
npx create-vite my-vite-app

# 创建 Express 应用
npx express-generator my-express-app
```

### 2. 快速启动服务器

```bash
# 在当前目录启动静态服务器
npx serve .

# 使用 http-server
npx http-server -p 8080

# 启动 JSON Server（REST API 模拟）
npx json-server db.json --port 3001
```

### 3. 代码检查和格式化

```bash
# ESLint 检查
npx eslint .

# Prettier 格式化
npx prettier --write .

# TypeScript 编译检查
npx tsc --noEmit
```

### 4. 工具类命令

```bash
# 杀死占用特定端口的进程
npx kill-port 3000

# 检查 npm 包更新
npx npm-check-updates

# 交互式更新依赖
npx npm-check-updates -i

# 查看包的大小
npx bundlephobia lodash
```

### 5. 运行特定版本的包

```bash
# 使用特定版本的 cowsay
npx cowsay@1.5.0 "Hello World"

# 使用特定版本的 Node.js 运行代码
npx node@18 -e "console.log(process.version)"
```

## npx 与 npm 的区别

| 场景 | npm | npx |
|------|-----|-----|
| 需要长期使用的包 | ✅ 适合全局安装 | ❌ 每次都要下载 |
| 一次性命令 | ❌ 需要安装再删除 | ✅ 用完自动清理 |
| 脚手架工具 | ❌ 版本可能过时 | ✅ 总是使用最新版 |
| 项目本地命令 | 需要写完整路径 | ✅ 自动查找 |

## 运行本地安装的包

```bash
# 不使用 npx
./node_modules/.bin/eslint --init

# 使用 npx（推荐）
npx eslint --init
```

