#!/bin/bash

# npx 演示脚本
# 运行前请确保已安装 Node.js

echo "=========================================="
echo "         npx 功能演示脚本"
echo "=========================================="
echo ""

# 演示 1: 启动 JSON Server
echo "📦 演示 1: 使用 npx 启动 JSON Server"
echo "命令: npx json-server db.json --port 3001"
echo ""
echo "这将启动一个 REST API 服务器，提供以下接口："
echo "  GET    /users"
echo "  GET    /users/:id"
echo "  POST   /users"
echo "  PUT    /users/:id"
echo "  DELETE /users/:id"
echo ""
echo "按 Ctrl+C 停止服务器后继续..."
echo ""

# 取消注释下面的行来实际运行
# npx json-server db.json --port 3001

echo ""
echo "=========================================="
echo "📦 演示 2: 使用 npx 启动静态服务器"
echo "命令: npx serve ."
echo ""
echo "这将在当前目录启动一个静态文件服务器"
echo ""

# 取消注释下面的行来实际运行
# npx serve .

echo ""
echo "=========================================="
echo "📦 演示 3: 使用 npx 检查端口占用"
echo "命令: npx kill-port 3000"
echo ""

echo ""
echo "=========================================="
echo "演示完成！"
echo "=========================================="

