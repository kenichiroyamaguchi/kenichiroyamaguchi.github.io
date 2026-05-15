(function () {
    document.addEventListener('click', function (e) {
        var link = e.target.closest('a[href]');
        if (!link) return;
        var href = link.getAttribute('href');
        if (!href || href.startsWith('mailto:') || href.startsWith('http') || href.startsWith('#')) return;

        e.preventDefault();
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '0';
        setTimeout(function () {
            window.location.href = href;
        }, 300);
    });
})();
