/**
 * @demo/shared - 共享工具库
 * 可以被 monorepo 中的其他包引用
 */

const _ = require('lodash');

// 工具函数：格式化用户名
function formatUsername(name) {
  return _.capitalize(name.trim());
}

// 工具函数：生成随机 ID
function generateId() {
  return Math.random().toString(36).substring(2, 15);
}

// 工具函数：深拷贝对象
function deepClone(obj) {
  return _.cloneDeep(obj);
}

// 工具函数：数组去重
function unique(arr) {
  return _.uniq(arr);
}

// 工具函数：延迟执行
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {
  formatUsername,
  generateId,
  deepClone,
  unique,
  delay
};

