document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        // 同时监听 click 和 touchstart 事件
        hamburger.addEventListener('click', toggleMenu);
        hamburger.addEventListener('touchstart', toggleMenu);

        function toggleMenu(e) {
            e.preventDefault();
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        }

        // 点击页面其他区域关闭菜单
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.navbar')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });

        // 窗口大小变化时重置菜单
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
});