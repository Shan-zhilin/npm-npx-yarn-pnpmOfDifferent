/**
 * @demo/api - API 服务
 * 演示如何在 Monorepo 中使用共享包
 */

const express = require('express');
const { generateId, deepClone, delay } = require('@demo/shared');

const app = express();
const PORT = 3004;

app.use(express.json());

// 模拟数据库
const db = {
  products: [
    { id: '1', name: '苹果', price: 5.5, stock: 100 },
    { id: '2', name: '香蕉', price: 3.0, stock: 150 },
    { id: '3', name: '橙子', price: 4.5, stock: 80 }
  ]
};

// 首页
app.get('/', (req, res) => {
  res.json({
    message: 'Monorepo API 服务',
    description: '这个服务也使用了 @demo/shared 共享包',
    routes: [
      'GET /products - 获取所有商品',
      'POST /products - 创建商品',
      'GET /slow - 演示 delay 函数'
    ]
  });
});

// 获取所有商品（使用深拷贝避免直接暴露内部数据）
app.get('/products', (req, res) => {
  const products = deepClone(db.products);
  res.json(products);
});

// 创建商品
app.post('/products', (req, res) => {
  const { name, price, stock } = req.body;
  
  if (!name || price === undefined) {
    return res.status(400).json({ error: '请提供商品名称和价格' });
  }

  const product = {
    id: generateId(),
    name,
    price,
    stock: stock || 0
  };

  db.products.push(product);
  res.status(201).json(product);
});

// 演示 delay 函数
app.get('/slow', async (req, res) => {
  const start = Date.now();
  await delay(1000);  // 延迟 1 秒
  const end = Date.now();
  
  res.json({
    message: '延迟响应演示',
    delayMs: end - start
  });
});

app.listen(PORT, () => {
  console.log(`🔌 Monorepo API 服务运行在 http://localhost:${PORT}`);
});

