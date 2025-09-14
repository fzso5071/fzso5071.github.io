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
            title: '某个作业',
            date: '2025-09-14',
            content: `
                 <h3>对成长环境的认识和判断</h3>
                 <p>毛泽东生于晚清农村，目睹农民贫困与社会不公。他认为封建压迫和外国侵略是民族危机的根源，坚信必须通过彻底变革才能改变旧中国的命运。</p>

                 <h3>人生志向的确立</h3>
                 <p>青年毛泽东在阅读《盛世危言》等书籍后，萌发救国思想。后接触马克思主义，确立“改造中国与世界”的志向，决心领导革命实现民族独立与人民解放。</p>

                 <h3>利用社会条件实现目标</h3>
                 <p>他借助新文化运动传播思想，参与建党，利用农村社会矛盾发动农民运动，结合游击战和统一战线，逐步壮大革命力量，最终取得抗日战争和解放战争的胜利。</p>

                 <h3>社会贡献</h3>
                 <p>毛泽东领导中国共产党建立新中国，实现国家独立；推动土地改革、妇女解放等社会变革；奠定了工业化基础，影响了亚洲乃至世界的民族解放运动。</p>

                 <h3>社会评价</h3>
                 <p>他被视为中国现代史上的重要革命家、战略家和理论家。在中国，他被尊称为“伟大领袖”，但其晚年政策也存在争议。国际评价多元，普遍认可其历史影响力。</p>

                 <h3>成长启示</h3>
                 <p>毛泽东的成长表明，个人理想需与时代使命结合，深入实践、调查研究是认识世界的关键，坚定的信念与战略灵活性相辅相成，但也启示后人需平衡理想与现实。</p>
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
