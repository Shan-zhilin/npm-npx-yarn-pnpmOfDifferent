# pnpm Monorepo 演示

这是一个使用 pnpm workspaces 的 Monorepo 示例项目。

## 项目结构

```
monorepo-demo/
├── package.json           # 根配置
├── pnpm-workspace.yaml    # 工作区配置
├── packages/
│   └── shared/            # 共享工具库
│       ├── package.json
│       └── index.js
└── apps/
    ├── web/               # Web 应用
    │   ├── package.json
    │   └── index.js
    └── api/               # API 服务
        ├── package.json
        └── index.js
```

## 快速开始

```bash
# 1. 安装所有依赖
pnpm install

# 2. 启动所有应用
pnpm -r run start

# 或者分别启动
pnpm --filter @demo/web run start
pnpm --filter @demo/api run start
```

## 常用命令

```bash
# 在所有包中运行命令
pnpm -r run build
pnpm -r run test

# 过滤特定包
pnpm --filter @demo/shared run build
pnpm --filter @demo/web run dev
pnpm --filter @demo/api run dev

# 使用 glob 模式过滤
pnpm --filter "./apps/**" run build
pnpm --filter "./packages/**" run test

# 添加依赖到特定包
pnpm --filter @demo/web add axios
pnpm --filter @demo/api add cors

# 添加依赖到根目录（开发工具）
pnpm add -w -D typescript eslint
```

## 包引用方式

在 `package.json` 中使用 `workspace:*` 引用本地包：

```json
{
  "dependencies": {
    "@demo/shared": "workspace:*"
  }
}
```

然后在代码中正常引用：

```javascript
const { formatUsername, generateId } = require('@demo/shared');
```

## pnpm 工作区的优势

1. **依赖共享** - 相同依赖只安装一次
2. **硬链接** - 节省磁盘空间
3. **严格隔离** - 防止幽灵依赖
4. **快速安装** - 利用缓存加速
5. **统一管理** - 一个命令管理所有包

