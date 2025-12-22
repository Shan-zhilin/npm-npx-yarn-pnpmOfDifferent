/**
 * pnpm Demo - 简单的 Express 服务器
 * 
 * 运行方式：
 * 1. pnpm install     # 安装依赖
 * 2. pnpm start       # 启动服务器
 * 3. pnpm dev         # 开发模式
 */

const express = require('express');
const dayjs = require('dayjs');

const app = express();
const PORT = 3002;

// 首页路由
app.get('/', (req, res) => {
  res.json({
    message: '欢迎使用 pnpm Demo',
    packageManager: 'pnpm',
    currentTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    routes: [
      'GET /           - 首页',
      'GET /time       - 获取当前时间',
      'GET /date/:format - 自定义时间格式'
    ]
  });
});

// 获取当前时间
app.get('/time', (req, res) => {
  const now = dayjs();
  res.json({
    timestamp: now.valueOf(),
    iso: now.toISOString(),
    formatted: now.format('YYYY年MM月DD日 HH:mm:ss'),
    relative: {
      yesterday: now.subtract(1, 'day').format('YYYY-MM-DD'),
      tomorrow: now.add(1, 'day').format('YYYY-MM-DD'),
      nextWeek: now.add(1, 'week').format('YYYY-MM-DD')
    }
  });
});

// 自定义时间格式
app.get('/date/:format', (req, res) => {
  const { format } = req.params;
  try {
    res.json({
      format: format,
      result: dayjs().format(format),
      examples: {
        'YYYY-MM-DD': dayjs().format('YYYY-MM-DD'),
        'HH:mm:ss': dayjs().format('HH:mm:ss'),
        'dddd': dayjs().format('dddd'),
        'MMMM': dayjs().format('MMMM')
      }
    });
  } catch (error) {
    res.status(400).json({ error: '无效的格式' });
  }
});

app.listen(PORT, () => {
  console.log(`📦 pnpm Demo 服务器运行在 http://localhost:${PORT}`);
  console.log('');
  console.log('pnpm 常用命令：');
  console.log('  pnpm install        - 安装所有依赖');
  console.log('  pnpm add <pkg>      - 添加依赖');
  console.log('  pnpm add <pkg> -D   - 添加开发依赖');
  console.log('  pnpm remove <pkg>   - 移除依赖');
  console.log('  pnpm update         - 更新依赖');
  console.log('  pnpm store prune    - 清理存储');
  console.log('');
  console.log('pnpm 优势：');
  console.log('  ✅ 节省磁盘空间（硬链接）');
  console.log('  ✅ 安装速度快');
  console.log('  ✅ 严格的依赖隔离');
});

