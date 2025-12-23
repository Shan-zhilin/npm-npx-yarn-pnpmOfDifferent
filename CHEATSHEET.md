# 📋 包管理工具命令速查表

快速参考 npm、yarn、pnpm 常用命令。

---

## 🔄 命令对照表

| 操作 | npm | yarn | pnpm |
|------|-----|------|------|
| 初始化项目 | `npm init` | `yarn init` | `pnpm init` |
| 初始化（默认值） | `npm init -y` | `yarn init -y` | `pnpm init` |
| 安装所有依赖 | `npm install` | `yarn` | `pnpm install` |
| 添加生产依赖 | `npm install pkg` | `yarn add pkg` | `pnpm add pkg` |
| 添加开发依赖 | `npm install pkg -D` | `yarn add pkg -D` | `pnpm add pkg -D` |
| 全局安装 | `npm install -g pkg` | `yarn global add pkg` | `pnpm add -g pkg` |
| 删除依赖 | `npm uninstall pkg` | `yarn remove pkg` | `pnpm remove pkg` |
| 删除全局依赖 | `npm uninstall -g pkg` | `yarn global remove pkg` | `pnpm remove -g pkg` |
| 更新依赖 | `npm update` | `yarn upgrade` | `pnpm update` |
| 更新指定包 | `npm update pkg` | `yarn upgrade pkg` | `pnpm update pkg` |
| 交互式更新 | `npx npm-check -u` | `yarn upgrade-interactive` | `pnpm update -i` |
| 运行脚本 | `npm run script` | `yarn script` | `pnpm script` |
| 运行 start | `npm start` | `yarn start` | `pnpm start` |
| 运行 test | `npm test` | `yarn test` | `pnpm test` |
| 查看已安装包 | `npm list` | `yarn list` | `pnpm list` |
| 查看过时的包 | `npm outdated` | `yarn outdated` | `pnpm outdated` |
| 清理缓存 | `npm cache clean --force` | `yarn cache clean` | `pnpm store prune` |
| 查看包信息 | `npm info pkg` | `yarn info pkg` | `pnpm info pkg` |
| 登录 npm | `npm login` | `yarn login` | `pnpm login` |
| 发布包 | `npm publish` | `yarn publish` | `pnpm publish` |

---

## 📦 npx 常用命令

```bash
# 脚手架
npx create-react-app my-app
npx create-vue@latest my-app
npx create-next-app@latest my-app
npx create-vite my-app

# 开发工具
npx eslint --init
npx prettier --write .
npx tsc --init

# 实用工具
npx serve                    # 静态服务器
npx http-server             # HTTP 服务器
npx json-server db.json     # REST API 模拟
npx kill-port 3000          # 杀死端口进程
npx npm-check-updates -u    # 更新 package.json 版本
```

---

## 🗂️ 工作区命令 (Monorepo)

### pnpm 工作区

```bash
# 配置 pnpm-workspace.yaml
packages:
  - 'packages/*'
  - 'apps/*'

# 常用命令
pnpm install                           # 安装所有工作区依赖
pnpm -r run build                      # 在所有包中运行 build
pnpm --filter pkg-name run dev         # 在指定包中运行
pnpm --filter "./packages/**" run test # 使用 glob 过滤
pnpm --filter pkg-name add lodash      # 向指定包添加依赖
pnpm add -w typescript                 # 向根目录添加依赖
```

### yarn 工作区

```bash
# 配置 package.json
{
  "workspaces": ["packages/*", "apps/*"]
}

# 常用命令
yarn install                           # 安装所有工作区依赖
yarn workspaces run build              # 在所有包中运行 build
yarn workspace pkg-name run dev        # 在指定包中运行
yarn workspace pkg-name add lodash     # 向指定包添加依赖
```

### npm 工作区 (v7+)

```bash
# 配置 package.json
{
  "workspaces": ["packages/*"]
}

# 常用命令
npm install                            # 安装所有工作区依赖
npm run build --workspaces             # 在所有包中运行 build
npm run dev -w pkg-name                # 在指定包中运行
npm install lodash -w pkg-name         # 向指定包添加依赖
```

---

## ⚙️ 配置文件

### .npmrc (npm/pnpm 通用)

```ini
# 镜像源
registry=https://registry.npmmirror.com

# 保存精确版本
save-exact=true

# 引擎严格模式
engine-strict=true

# pnpm 特有
auto-install-peers=true
# shamefully-hoist=true  # 兼容性问题时使用
```

### .yarnrc.yml (Yarn Berry)

```yaml
nodeLinker: node-modules
# nodeLinker: pnp  # Plug'n'Play 模式

npmRegistryServer: "https://registry.npmmirror.com"
```

---

## 🚀 性能对比

```
安装速度:  pnpm > yarn > npm
磁盘占用:  pnpm < yarn ≈ npm
依赖隔离:  pnpm > yarn = npm
兼容性:    npm > yarn > pnpm
```

---

## 💡 选择建议

| 场景 | 推荐 |
|------|------|
| 新项目 | pnpm |
| 大型 Monorepo | pnpm |
| 已有 npm 项目 | 保持 npm 或迁移到 pnpm |
| 一次性命令 | npx |
| 最大兼容性 | npm |
| CI/CD 环境 | 与项目保持一致 |

---

## 🔗 锁文件

| 工具 | 锁文件 |
|------|--------|
| npm | `package-lock.json` |
| yarn | `yarn.lock` |
| pnpm | `pnpm-lock.yaml` |

⚠️ **重要**: 锁文件必须提交到 Git！

---