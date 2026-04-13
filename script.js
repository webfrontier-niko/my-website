// DOMが読み込まれたら実行
document.addEventListener('DOMContentLoaded', function() {
    // 現在の年を取得してフッターの著作権表示を更新
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        footerYear.textContent = footerYear.textContent.replace('2025', currentYear);
    }
    
    // ページ読み込み時の挨拶
    console.log('ようこそ、私のWebサイトへ！');
});