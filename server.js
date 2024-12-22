const express = require('express');
const path = require('path');
const app = express();

// 静态文件服务
app.use(express.static('public'));
app.use(express.json());

// 主页路由
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'converter.html'));
});

// API 路由
app.post('/convertToMarkdown', (req, res) => {
    // 您的转换逻辑
});

// 处理 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'converter.html'));
});

// 设置端口
const PORT = process.env.PORT || 3000;

// 启动服务器
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

// 导出 app 以供 Vercel 使用
module.exports = app; 