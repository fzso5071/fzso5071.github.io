// 主页不需要特别的JavaScript功能
// 博客内容页的JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // 检查是否是博客内容页
    if (document.querySelector('.full-post')) {
        loadBlogPost();
    }
});

function loadBlogPost() {
    // 从URL获取文章ID
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    
    // 模拟从数据库或API获取文章数据
    const posts = {
        '1': {
            title: '我的第一篇文章',
            date: '2023-05-15',
            content: `
                <p>欢迎来到我的博客！这是我的第一篇文章。</p>
                <p>在这里，我打算分享我的学习经验、生活感悟和技术心得。</p>
                <p>希望这些内容对你有所帮助，也欢迎你提出宝贵的意见和建议。</p>
                <p>博客刚刚建立，内容会逐渐丰富起来，敬请期待！</p>
            `
        },
        '2': {
            title: '学习HTML的几点心得',
            date: '2023-04-28',
            content: `
                <h3>1. 理解语义化</h3>
                <p>HTML不仅仅是展示内容，更重要的是表达内容的含义。使用正确的标签（如article、section、nav等）可以让你的网页对搜索引擎和屏幕阅读器更友好。</p>
                
                <h3>2. 结构优先于样式</h3>
                <p>先构建好HTML结构，再考虑CSS样式。良好的结构是网页的基础。</p>
                
                <h3>3. 渐进增强</h3>
                <p>确保基本的HTML内容在所有浏览器中都能正常显示，然后再通过CSS和JavaScript增强体验。</p>
                
                <h3>4. 验证你的代码</h3>
                <p>使用W3C验证器检查你的HTML代码，确保没有错误。</p>
            `
        }
    };
    
    // 获取文章数据并显示
    const post = posts[postId] || {
        title: '文章未找到',
        date: '',
        content: '<p>抱歉，您请求的文章不存在或已被删除。</p>'
    };
    
    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-date').textContent = post.date;
    document.getElementById('post-date').setAttribute('datetime', post.date);
    document.getElementById('post-content').innerHTML = post.content;
    
    // 更新页面标题
    document.title = `${post.title} - 我的简洁博客`;
}
