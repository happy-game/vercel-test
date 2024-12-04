const express = require('express');
const dotenv = require('dotenv');

// 加载环境变量
dotenv.config();

const app = express();

// 创建 GET / 路由
app.get('/', (req, res) => {
  // 从环境变量中获取值
  const message = process.env.MESSAGE || '没有设置环境变量';
  res.json({ message });
});

// 本地开发服务器端口
const PORT = process.env.PORT || 3002;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
  });
}

// 导出应用实例供 Vercel 使用
module.exports = app; 