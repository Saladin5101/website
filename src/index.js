// 这是Worker的核心入口，必须有这个fetch函数
export default {
  async fetch(request) {
    // 访问任何路径都返回你的纯文本主页内容
    const html = `===========================================================
                      Saladin5101          
                      Home Page
                Last update : Oct 26 2025
===========================================================
E-comOS Homepage https://e-comos.saladin510-orangeyouhome-erath.online
LadinOS Homepage https://ladinos.saladin510-orangeyouhome-erath.online
===========================================================
Copyright (C) 2025 Saladin5101 
Licensed on MPL`;

    return new Response(html, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8" // 纯文本格式
      }
    });
  }
};
