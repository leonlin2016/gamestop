document.addEventListener('DOMContentLoaded', function() {
    // 菜单切换功能
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
    
    // 点击页面其他区域关闭菜单（在移动设备上）
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = sidebar.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnToggle && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });
    
    // 语言选择功能
    const langLinks = document.querySelectorAll('.language-dropdown a');
    const langBtn = document.querySelector('.lang-btn');
    
    langLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            const langText = this.textContent;
            
            // 更新按钮文本
            langBtn.innerHTML = lang.toUpperCase() + ' <i class="fas fa-caret-down"></i>';
            
            // 这里可以添加语言切换逻辑
            // 例如：更改网站语言、保存用户偏好等
            console.log('Language changed to: ' + langText);
            
            // 如果有实际的语言切换功能，可以在这里实现
            // changeLanguage(lang);
        });
    });
    
    // 游戏卡片点击事件
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
        card.addEventListener('click', function() {
            const gameName = this.querySelector('h3').textContent;
            console.log('Game selected: ' + gameName);
            // 这里可以添加游戏跳转逻辑
            // window.location.href = 'games/' + gameName.toLowerCase().replace(/\s+/g, '-') + '.html';
        });
    });
});

// 窗口大小改变时处理响应式布局
window.addEventListener('resize', function() {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth > 992 && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
});