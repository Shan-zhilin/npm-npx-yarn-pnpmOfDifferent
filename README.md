# JavaScript 包管理工具详解

> npm、npx、yarn、pnpm 的全面对比与实战指南

## 📚 目录

- [概述](#概述)
- [npm - Node Package Manager](#npm---node-package-manager)
- [npx - Node Package Execute](#npx---node-package-execute)
- [yarn - Yet Another Resource Negotiator](#yarn---yet-another-resource-negotiator)
- [pnpm - Performant npm](#pnpm---performant-npm)
- [四者对比](#四者对比)
- [实战演示](#实战演示)
- [最佳实践](#最佳实践)

---

## 概述

| 工具 | 发布时间 | 开发者 | 主要特点 |
|------|----------|--------|----------|
| npm | 2010 | npm, Inc | Node.js 默认包管理器 |
| npx | 2017 | npm, Inc | 执行 npm 包的工具 |
| yarn | 2016 | Facebook | 更快、更安全的替代方案 |
| pnpm | 2017 | Zoltan Kochan | 高效磁盘利用，硬链接机制 |

---

## npm - Node Package Manager

### 什么是 npm？

npm 是 **Node.js 的默认包管理器**，随 Node.js 一起安装。它是世界上最大的软件注册表，拥有超过 200 万个包。

### 核心功能

```bash
# 1. 初始化项目
npm init                    # 交互式创建 package.json
npm init -y                 # 使用默认值快速创建

# 2. 安装依赖
npm install                 # 安装 package.json 中所有依赖
npm install <package>       # 安装包到 dependencies
npm install <package> -D    # 安装包到 devDependencies
npm install <package> -g    # 全局安装

# 3. 卸载依赖
npm uninstall <package>     # 卸载包
npm uninstall <package> -g  # 卸载全局包

# 4. 更新依赖
npm update                  # 更新所有包
npm update <package>        # 更新指定包

# 5. 查看信息
npm list                    # 查看已安装的包
npm list -g                 # 查看全局安装的包
npm info <package>          # 查看包信息
npm outdated                # 查看过时的包

# 6. 运行脚本
npm run <script>            # 运行 package.json 中定义的脚本
npm start                   # 运行 start 脚本
npm test                    # 运行 test 脚本

# 7. 发布包
npm login                   # 登录 npm
npm publish                 # 发布包
npm version patch/minor/major  # 更新版本号
```

### package.json 示例

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "示例项目",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest",
    "build": "webpack --mode production"
  },
  "dependencies": {
    "express": "^4.18.2",
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "jest": "^29.7.0",
    "nodemon": "^3.0.1"
  }
}
```

### npm 的依赖版本符号

```
^1.2.3  - 兼容版本，允许 1.x.x（不改变最左非零数字）
~1.2.3  - 近似版本，允许 1.2.x
1.2.3   - 精确版本
*       - 任意版本
>=1.2.3 - 大于等于指定版本
1.2.x   - 1.2.0 到 1.2.x 的任意版本
```

### package-lock.json

- 锁定依赖的精确版本
- 确保团队成员安装相同版本
- 加速重复安装过程

---

## npx - Node Package Execute

### 什么是 npx？

npx 是 npm 5.2+ 自带的工具，用于**执行 npm 包中的命令**，无需全局安装。

### 核心用途

#### 1. 执行本地安装的包

```bash
# 不使用 npx（需要完整路径）
./node_modules/.bin/eslint --init

# 使用 npx（自动查找）
npx eslint --init
```

#### 2. 执行未安装的包（临时下载执行）

```bash
# 创建 React 应用（不需要预先安装 create-react-app）
npx create-react-app my-app

# 创建 Vue 应用
npx create-vue@latest my-vue-app

# 创建 Next.js 应用
npx create-next-app@latest my-next-app

# 运行特定版本的包
npx cowsay@1.5.0 "Hello World"
```

#### 3. 执行 GitHub gist 代码

```bash
npx https://gist.github.com/username/gist-id
```

#### 4. 执行不同版本的 Node.js

```bash
npx node@14 --version
npx node@16 -e "console.log('Hello from Node 16')"
```

### npx vs npm 对比

```bash
# npm 方式：需要先安装，再运行
npm install -g create-react-app
create-react-app my-app

# npx 方式：直接运行，用完即删
npx create-react-app my-app
```

### 常用 npx 命令

```bash
# 脚手架工具
npx create-react-app my-app          # React
npx create-vue@latest my-app         # Vue 3
npx create-next-app my-app           # Next.js
npx create-vite my-app               # Vite
npx degit user/repo my-app           # 克隆 git 仓库模板

# 代码检查和格式化
npx eslint .                         # ESLint 检查
npx prettier --write .               # Prettier 格式化
npx tsc --init                       # 初始化 TypeScript

# 实用工具
npx serve                            # 快速启动静态服务器
npx http-server                      # HTTP 服务器
npx json-server db.json              # 模拟 REST API
npx kill-port 3000                   # 杀死占用端口的进程
npx npm-check-updates -u             # 检查并更新依赖版本
```

---

## yarn - Yet Another Resource Negotiator

### 什么是 yarn？

yarn 是 Facebook 在 2016 年发布的包管理器，旨在解决 npm 早期的**速度慢、安全性差、一致性问题**。

### 安装 yarn

```bash
# 通过 npm 安装
npm install -g yarn

# macOS（使用 Homebrew）
brew install yarn

# 检查版本
yarn --version
```

### 核心命令对比

| 功能 | npm | yarn |
|------|-----|------|
| 初始化 | `npm init` | `yarn init` |
| 安装所有依赖 | `npm install` | `yarn` 或 `yarn install` |
| 添加依赖 | `npm install pkg` | `yarn add pkg` |
| 添加开发依赖 | `npm install pkg -D` | `yarn add pkg -D` |
| 全局安装 | `npm install -g pkg` | `yarn global add pkg` |
| 删除依赖 | `npm uninstall pkg` | `yarn remove pkg` |
| 更新依赖 | `npm update pkg` | `yarn upgrade pkg` |
| 运行脚本 | `npm run script` | `yarn script` |
| 清理缓存 | `npm cache clean` | `yarn cache clean` |

### yarn 独特功能

#### 1. yarn.lock 文件

```yaml
# yarn.lock 示例（自动生成）
lodash@^4.17.21:
  version "4.17.21"
  resolved "https://registry.yarnpkg.com/lodash/-/lodash-4.17.21.tgz"
  integrity sha512-v2kDE...
```

#### 2. 离线模式

```bash
# 开启离线安装（使用缓存）
yarn install --offline
```

#### 3. 工作区（Workspaces）- Monorepo 支持

```json
// package.json
{
  "name": "monorepo",
  "private": true,
  "workspaces": [
    "packages/*"
  ]
}
```

```bash
# 安装所有工作区依赖
yarn install

# 在特定工作区运行命令
yarn workspace package-a add lodash
yarn workspace package-a run build
```

#### 4. 交互式升级

```bash
yarn upgrade-interactive
```

### Yarn Berry (v2+)

Yarn 2+ 引入了**零安装**和 **Plug'n'Play (PnP)** 模式：

```bash
# 升级到 Yarn Berry
yarn set version berry

# 启用 PnP 模式（无 node_modules）
# .yarnrc.yml
nodeLinker: pnp
```

---

## pnpm - Performant npm

### 什么是 pnpm？

pnpm 是一个**快速、节省磁盘空间**的包管理器。它使用**硬链接和符号链接**来避免重复安装相同的包。

### 安装 pnpm

```bash
# 通过 npm 安装
npm install -g pnpm

# macOS（使用 Homebrew）
brew install pnpm

# 使用 corepack（Node.js 16.13+）
corepack enable
corepack prepare pnpm@latest --activate

# 检查版本
pnpm --version
```

### pnpm 的核心优势

#### 1. 高效的存储机制

```
传统 npm/yarn:
project-a/node_modules/lodash/
project-b/node_modules/lodash/
project-c/node_modules/lodash/
→ 相同的包被复制 3 次

pnpm:
~/.pnpm-store/lodash/
project-a/node_modules/.pnpm/lodash → 硬链接
project-b/node_modules/.pnpm/lodash → 硬链接
project-c/node_modules/.pnpm/lodash → 硬链接
→ 只存储一份，节省磁盘空间
```

#### 2. 严格的依赖隔离

```
npm 扁平化结构（可能有幽灵依赖问题）:
node_modules/
  ├── express/
  ├── body-parser/  ← express 的依赖，但可以直接 import
  └── ...

pnpm 严格结构（只能访问声明的依赖）:
node_modules/
  ├── .pnpm/
  │   ├── express@4.18.2/
  │   │   └── node_modules/
  │   │       ├── express/
  │   │       └── body-parser/
  │   └── ...
  └── express → .pnpm/express@4.18.2/node_modules/express
```

### 命令对比

| 功能 | npm | yarn | pnpm |
|------|-----|------|------|
| 安装依赖 | `npm install` | `yarn` | `pnpm install` |
| 添加依赖 | `npm install pkg` | `yarn add pkg` | `pnpm add pkg` |
| 删除依赖 | `npm uninstall pkg` | `yarn remove pkg` | `pnpm remove pkg` |
| 更新依赖 | `npm update` | `yarn upgrade` | `pnpm update` |
| 运行脚本 | `npm run dev` | `yarn dev` | `pnpm dev` |

### pnpm 独特功能

#### 1. pnpm-lock.yaml

```yaml
# pnpm-lock.yaml 示例
lockfileVersion: '6.0'
packages:
  /lodash@4.17.21:
    resolution: {integrity: sha512-...}
    engines: {node: '>=4'}
```

#### 2. 工作区（Workspaces）

```yaml
# pnpm-workspace.yaml
packages:
  - 'packages/*'
  - 'apps/*'
```

```bash
# 在所有包中运行命令
pnpm -r run build

# 过滤特定包
pnpm --filter package-a run build
pnpm --filter "./packages/**" run test
```

#### 3. 导入其他包管理器的项目

```bash
# 从 npm/yarn 迁移
pnpm import
```

#### 4. 补丁功能

```bash
# 修补有 bug 的依赖
pnpm patch lodash@4.17.21
# 编辑文件后
pnpm patch-commit
```

---

## 四者对比

### 功能对比表

| 特性 | npm | npx | yarn | pnpm |
|------|-----|-----|------|------|
| 包安装 | ✅ | ❌ | ✅ | ✅ |
| 包执行 | ❌ | ✅ | ❌ | ❌ |
| 离线模式 | ✅ | ❌ | ✅ | ✅ |
| 工作区 | ✅ (v7+) | ❌ | ✅ | ✅ |
| 锁文件 | package-lock.json | ❌ | yarn.lock | pnpm-lock.yaml |
| 磁盘效率 | 低 | - | 低 | 高 |
| 安装速度 | 中 | - | 快 | 最快 |
| 依赖隔离 | 弱 | - | 弱 | 强 |

### 性能对比

```
安装速度排名（从快到慢）：
1. pnpm（使用硬链接，最快）
2. yarn（并行安装，缓存优化）
3. npm（传统安装方式）

磁盘占用排名（从小到大）：
1. pnpm（硬链接共享）
2. yarn（普通缓存）
3. npm（每个项目独立副本）
```

### 选择建议

```
选择 npm：
- 小型项目或学习阶段
- 不想安装额外工具
- 需要最广泛的兼容性

选择 npx：
- 运行一次性命令
- 使用脚手架工具
- 测试不同版本的包

选择 yarn：
- 需要更快的安装速度
- Monorepo 项目（yarn workspaces）
- 团队已经在使用 yarn

选择 pnpm：
- 磁盘空间有限
- 大型 Monorepo 项目
- 需要严格的依赖隔离
- 追求最佳性能
```

---

## 实战演示

### Demo 1: 创建一个简单项目

```bash
# 创建项目目录
mkdir demo-project && cd demo-project

# === 使用 npm ===
npm init -y
npm install express
npm install nodemon -D

# === 使用 yarn ===
yarn init -y
yarn add express
yarn add nodemon -D

# === 使用 pnpm ===
pnpm init
pnpm add express
pnpm add nodemon -D
```

### Demo 2: 使用 npx 快速启动服务器

```bash
# 在任意目录，无需安装任何包
npx serve .

# 或者使用 http-server
npx http-server -p 8080

# 快速创建 REST API 模拟服务器
echo '{"users": [{"id": 1, "name": "John"}]}' > db.json
npx json-server db.json
```

### Demo 3: Monorepo 项目结构

```bash
# 使用 pnpm 创建 Monorepo
mkdir my-monorepo && cd my-monorepo
pnpm init

# 创建 pnpm-workspace.yaml
cat > pnpm-workspace.yaml << EOF
packages:
  - 'packages/*'
EOF

# 创建子包
mkdir -p packages/shared packages/web packages/api

# 在 shared 包中初始化
cd packages/shared && pnpm init
cd ../web && pnpm init
cd ../api && pnpm init

# 回到根目录，安装依赖
cd ../..
pnpm add -w typescript  # 根目录添加
pnpm --filter web add react react-dom
pnpm --filter api add express

# 运行所有包的 build 命令
pnpm -r run build
```

### Demo 4: 迁移项目

```bash
# 从 npm 迁移到 yarn
rm -rf node_modules package-lock.json
yarn install

# 从 npm/yarn 迁移到 pnpm
rm -rf node_modules package-lock.json yarn.lock
pnpm import  # 如果有 package-lock.json 或 yarn.lock
pnpm install
```

---

## 最佳实践

### 1. 锁定文件必须提交

```bash
# .gitignore 中不要忽略这些文件
# package-lock.json  ← 保留
# yarn.lock          ← 保留
# pnpm-lock.yaml     ← 保留
```

### 2. 使用精确版本进行关键依赖

```bash
npm install express --save-exact
# 或在 .npmrc 中设置
save-exact=true
```

### 3. 定期更新依赖

```bash
# 检查过时的包
npm outdated
yarn outdated
pnpm outdated

# 交互式更新
npx npm-check-updates -i
yarn upgrade-interactive
pnpm update -i
```

### 4. 使用 .npmrc 配置

```ini
# .npmrc
registry=https://registry.npmmirror.com
save-exact=true
engine-strict=true
```

### 5. 清理缓存

```bash
npm cache clean --force
yarn cache clean
pnpm store prune
```

### 6. 统一团队的包管理器

```json
// package.json
{
  "packageManager": "pnpm@8.10.0",
  "engines": {
    "node": ">=18.0.0"
  }
}
```

---

## 常见问题

### Q1: 为什么 pnpm 安装后某些包报错？

pnpm 的严格模式可能导致"幽灵依赖"问题。解决方案：

```ini
# .npmrc
shamefully-hoist=true  # 提升所有依赖（不推荐长期使用）
public-hoist-pattern[]=*  # 提升所有包

# 或者添加缺失的依赖
pnpm add missing-package
```

### Q2: 如何在 CI/CD 中使用？

```yaml
# GitHub Actions 示例
- name: Setup pnpm
  uses: pnpm/action-setup@v2
  with:
    version: 8

- name: Install dependencies
  run: pnpm install --frozen-lockfile
```

### Q3: 如何同时支持多种包管理器？

使用 `only-allow` 强制使用指定的包管理器：

```json
{
  "scripts": {
    "preinstall": "npx only-allow pnpm"
  }
}
```

---

## 总结

| 场景 | 推荐工具 |
|------|----------|
| 日常开发 | pnpm（性能最佳） |
| 一次性命令 | npx |
| 广泛兼容性 | npm |
| 已有项目 | 保持原有工具 |
| Monorepo | pnpm 或 yarn workspaces |

**最终建议**：如果是新项目，推荐使用 **pnpm**，它在性能和磁盘利用率方面都是最优的选择。对于需要执行一次性脚手架命令的场景，使用 **npx**。

---

## 参考资源

- [npm 官方文档](https://docs.npmjs.com/)
- [npx 介绍](https://docs.npmjs.com/cli/v8/commands/npx)
- [yarn 官方文档](https://yarnpkg.com/)
- [pnpm 官方文档](https://pnpm.io/)

---

*最后更新：2025年12月*

