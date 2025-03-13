document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        if(hamburger && navLinks) { // 增加空值判断
            hamburger.addEventListener('click', function(e) {
                e.stopPropagation(); // 阻止事件冒泡
                this.classList.toggle('active');
                navLinks.classList.toggle('active');
            });

            // 点击页面其他区域关闭菜单
            document.addEventListener('click', function(e) {
                if(!e.target.closest('.navbar')) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            });

            // 窗口resize时重置
            window.addEventListener('resize', function() {
                if(window.innerWidth > 768) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            });
        }
    });