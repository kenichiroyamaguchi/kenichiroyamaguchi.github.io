(function () {
    var files = [
        "0395.jpg","0467.jpg","0529.jpg","0653.jpeg","1680.jpeg",
        "1703063161.jpeg","1757.jpg","2012105791.jpg","22111814461.jpg",
        "22111814515.jpeg","23031816191.jpg","23032517606.jpg","2310253816.jpg",
        "23110223316.jpg","24091811369.jpeg","24112344020.jpg","2502098284.jpg",
        "7037.jpg","DSC00124.jpg","DSC00552.jpeg","DSC00935.jpeg","DSC02146.jpg",
        "DSC02714.jpg","DSC02906.jpeg","DSC03569.jpg","DSC04360.jpeg","DSC04767.jpg",
        "DSC05572.jpeg","DSC05576.jpg","DSC05843.jpg","DSC05979.jpeg","DSC06036.jpg",
        "DSC06865.jpg","DSC06910.jpeg","DSC08138.jpeg","DSC08490.jpeg","DSC09175.jpg",
        "DSC09534 コピー.jpeg","L1000092.jpg","L1000357.jpg","L1020393.jpeg",
        "L1030932.jpg","L1040091.jpg","L1040128.jpg","L1050935.jpeg","L1060126.jpeg",
        "L1080298.jpeg","L1090924.jpg","L1100695.jpg","L1120743.jpg","L1120805.jpeg",
        "L1130115.jpeg","awasasyouten3.jpeg","kunel-1.jpg","kurasobi_2025_04.jpeg",
        "2409259825.jpg"
    ];

    // Fisher-Yates shuffle
    for (var i = files.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = files[i]; files[i] = files[j]; files[j] = tmp;
    }

    var images = files.map(function (f) { return 'images/header/' + f; });

    // Preload only the next image (keeps first paint fast)
    function preload(src) {
        var img = new Image();
        img.src = src;
    }

    var header = document.querySelector('.salvia-header');

    var overlay = document.createElement('div');
    overlay.className = 'header-overlay';

    var bgA = document.createElement('div');
    bgA.className = 'header-bg';
    var bgB = document.createElement('div');
    bgB.className = 'header-bg';

    header.insertBefore(overlay, header.firstChild);
    header.insertBefore(bgB, header.firstChild);
    header.insertBefore(bgA, header.firstChild);

    var index = 0;
    bgA.style.backgroundImage = "url('" + images[0] + "')";
    bgA.classList.add('active');

    var front = bgA, back = bgB;

    if (images.length > 1) {
        preload(images[1]);
        setInterval(function () {
            index = (index + 1) % images.length;
            back.style.backgroundImage = "url('" + images[index] + "')";
            back.classList.add('active');
            front.classList.remove('active');
            var tmp = front; front = back; back = tmp;
            preload(images[(index + 1) % images.length]);
        }, 10000);
    }
})();
