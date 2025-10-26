// src/index.js
export default {
  async fetch(request) {
    const url = new URL(request.url);
    // 简单示例：访问根路径返回纯文本主页
    if (url.pathname === "/") {
      return new Response("Saladin5101 Home Page", {
        headers: { "Content-Type": "text/plain" }
      });
    }
    // 其他路径返回404
    return new Response("Not Found", { status: 404 });
  }
};
