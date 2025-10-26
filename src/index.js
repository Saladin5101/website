// 这是Worker的核心入口，必须有这个fetch函数
export default {
  async fetch(request) {
    // 访问任何路径都返回你的纯文本主页内容，通过pre标签和基础样式适配窗口大小
    const html = `
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Saladin5101 Home Page</title>
        <style>
            pre {
                font-family: "Courier New", monospace;
                white-space: pre-wrap; /* 自动换行，适配窗口宽度 */
                word-wrap: break-word;
                margin: 0;
                padding: 20px;
                font-size: 1em;
                line-height: 1.5;
            }
            body {
                margin: 0;
                background-color: #fff;
            }
        </style>
    </head>
    <body>
        <pre>
===========================================================
                                                            Saladin5101          
                                                             Home Page
                                                      Last update : Oct 26 2025
===========================================================
E-comOS Homepage https://e-comos.saladin510-orangeyouhome-erath.online
LadinOS Homepage https://ladinos.saladin510-orangeyouhome-erath.online
===========================================================
Copyright (C) 2025 Saladin5101 
Licensed on MPL
        </pre>
    </body>
    </html>
    `;

    return new Response(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8"
      }
    });
  }
};
