/**
 * @demo/web - Web 应用
 * 演示如何在 Monorepo 中使用共享包
 */

const express = require('express');
// 引用 monorepo 中的共享包
const { formatUsername, generateId, unique } = require('@demo/shared');

const app = express();
const PORT = 3003;

app.use(express.json());

// 用户列表
const users = [];

// 首页
app.get('/', (req, res) => {
  res.json({
    message: 'Monorepo Web 应用',
    description: '这个应用使用了 @demo/shared 共享包',
    routes: [
      'GET /users - 获取所有用户',
      'POST /users - 创建用户 (body: { name: string })',
      'GET /demo - 演示共享包功能'
    ]
  });
});

// 获取所有用户
app.get('/users', (req, res) => {
  res.json(users);
});

// 创建用户（使用共享包的函数）
app.post('/users', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: '请提供用户名' });
  }

  const user = {
    id: generateId(),              // 使用共享包的 generateId
    name: formatUsername(name),    // 使用共享包的 formatUsername
    createdAt: new Date().toISOString()
  };

  users.push(user);
  res.status(201).json(user);
});

// 演示共享包功能
app.get('/demo', (req, res) => {
  const arr = [1, 2, 2, 3, 3, 3, 4];
  
  res.json({
    message: '共享包功能演示',
    examples: {
      formatUsername: {
        input: '  john doe  ',
        output: formatUsername('  john doe  ')
      },
      generateId: {
        output: generateId()
      },
      unique: {
        input: arr,
        output: unique(arr)
      }
    }
  });
});

app.listen(PORT, () => {
  console.log(`🌐 Monorepo Web 应用运行在 http://localhost:${PORT}`);
  console.log('');
  console.log('Monorepo 常用命令：');
  console.log('  pnpm install            - 安装所有包的依赖');
  console.log('  pnpm -r run build       - 在所有包中运行 build');
  console.log('  pnpm --filter @demo/web run dev  - 只在 web 包中运行');
  console.log('  pnpm --filter "./apps/**" run build - 运行所有 apps');
});

