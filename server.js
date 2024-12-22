const express = require('express');
const bodyParser = require('body-parser');
const mammoth = require('mammoth');
const MarkdownIt = require('markdown-it');

const app = express();
const md = new MarkdownIt();

app.use(bodyParser.json());
app.use(express.static('public')); // 用于提供静态文件

// Word转Markdown
app.post('/convertToMarkdown', (req, res) => {
    const html = req.body.content;
    const markdown = md.render(html);
    res.json({ markdown });
});

// Markdown转Word
app.post('/convertToWord', (req, res) => {
    const markdown = req.body.content;
    // 这里可以实现Markdown到Word的转换逻辑
    // 例如使用mammoth库
    const wordContent = markdown; // 这里需要实现转换逻辑
    res.json({ wordContent });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 