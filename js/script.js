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
            date: '2025-07-05',
            content: `
                <p>欢迎来到我的博客！这是我的第一篇文章。</p>
                <p>在这里，我打算分享我的学习经验、生活感悟和技术心得。</p>
                <p>希望这些内容对你有所帮助，也欢迎你提出宝贵的意见和建议。</p>
                <p>博客刚刚建立，内容会逐渐丰富起来，敬请期待！</p>
                <p/>
                <p/>
                <p/>
                <p>对了这个博客使用DeepSeek生成的（（</p>
            `
        },
        '2': {
            title: '想要将Arcaea的账号卖掉',
            date: '2025-07-05',
            content: `
                <p>参考价：~600，欢迎来砍价</p>
                <p>欢迎前往<a href="https://www.bilibili.com/video/BV1KY3LzKEqw" target+"_blank">哔哩哔哩</a>查看账号状况。
                <h3>概述</h3>
                <p>ptt11.77 ，还有推分涨ptt的余地</p>
                <p>现在除了联动的djmax，音击2、3包，喵斯快跑，wacca，maimai，tone sphere，lanota一包以及dynamix与记忆档案馆些许曲目没买，其他曲包均购入。</p>
                <p>也有很多beyond难度谱面解锁，且获得了较多的角色（目前有奈美一个限定）。</p>
                <p>世界模式背景全获得。</p>
                <p/>
                <p/>
                <p/>
                <p>如果对这个账号感兴趣，欢迎加我QQ（1412422438）来与我联系</p>
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
