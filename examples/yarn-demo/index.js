/**
 * Yarn Demo - 简单的 Express 服务器
 * 
 * 运行方式：
 * 1. yarn              # 安装依赖
 * 2. yarn start        # 启动服务器
 * 3. yarn dev          # 开发模式
 */

const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3001;

// 首页路由
app.get('/', (req, res) => {
  res.json({
    message: '欢迎使用 Yarn Demo',
    packageManager: 'yarn',
    routes: [
      'GET /          - 首页',
      'GET /joke      - 获取随机笑话',
      'GET /github/:user - 获取 GitHub 用户信息'
    ]
  });
});

// 获取随机笑话（演示 axios 使用）
app.get('/joke', async (req, res) => {
  try {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
    res.json({
      setup: response.data.setup,
      punchline: response.data.punchline
    });
  } catch (error) {
    res.status(500).json({ error: '获取笑话失败' });
  }
});

// 获取 GitHub 用户信息
app.get('/github/:user', async (req, res) => {
  try {
    const { user } = req.params;
    const response = await axios.get(`https://api.github.com/users/${user}`);
    res.json({
      login: response.data.login,
      name: response.data.name,
      bio: response.data.bio,
      public_repos: response.data.public_repos,
      followers: response.data.followers
    });
  } catch (error) {
    res.status(404).json({ error: '用户不存在' });
  }
});

app.listen(PORT, () => {
  console.log(`🧶 Yarn Demo 服务器运行在 http://localhost:${PORT}`);
  console.log('');
  console.log('Yarn 常用命令：');
  console.log('  yarn                    - 安装所有依赖');
  console.log('  yarn add <pkg>          - 添加依赖');
  console.log('  yarn add <pkg> -D       - 添加开发依赖');
  console.log('  yarn remove <pkg>       - 移除依赖');
  console.log('  yarn upgrade            - 更新依赖');
  console.log('  yarn upgrade-interactive - 交互式更新');
});

