/**
 * npm Demo - 简单的 Express 服务器
 * 
 * 运行方式：
 * 1. npm install     # 安装依赖
 * 2. npm start       # 启动服务器
 * 3. npm run dev     # 开发模式（需要 nodemon）
 */

const express = require('express');
const _ = require('lodash');

const app = express();
const PORT = 3000;

// 示例数据
const users = [
  { id: 1, name: '张三', age: 25 },
  { id: 2, name: '李四', age: 30 },
  { id: 3, name: '王五', age: 28 }
];

// 首页路由
app.get('/', (req, res) => {
  res.json({
    message: '欢迎使用 npm Demo',
    packageManager: 'npm',
    routes: [
      'GET /        - 首页',
      'GET /users   - 获取所有用户',
      'GET /random  - 获取随机用户'
    ]
  });
});

// 获取所有用户
app.get('/users', (req, res) => {
  res.json(users);
});

// 使用 lodash 获取随机用户
app.get('/random', (req, res) => {
  const randomUser = _.sample(users);
  res.json({
    message: '随机用户',
    user: randomUser
  });
});

app.listen(PORT, () => {
  console.log(`🚀 npm Demo 服务器运行在 http://localhost:${PORT}`);
  console.log('');
  console.log('可用命令：');
  console.log('  npm install    - 安装依赖');
  console.log('  npm start      - 启动服务器');
  console.log('  npm run dev    - 开发模式');
  console.log('  npm test       - 运行测试');
});

