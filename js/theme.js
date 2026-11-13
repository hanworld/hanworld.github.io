/* 윌리 프로젝트: 밝은 화면·어두운 화면 고르기
   - 처음에는 기기 설정(prefers-color-scheme)을 따른다.
   - 메뉴줄 단추로 기기 설정과 다른 쪽을 고르면 그 값('light' 또는 'dark')만 이 브라우저의
     localStorage('theme')에 둔다. 기기 설정과 같은 쪽으로 돌아오면 지운다. 서버로는 보내지 않는다
     (회사 개인정보처리방침 2장에 적은 그대로다. 저장하는 값을 늘리려면 방침부터 고친다).
   - 모든 페이지는 <head>의 common.css 바로 뒤에, 저장 값을 바로 적용하는 한 줄 스크립트를 두고
     (그리기 전에 색을 정해야 깜빡이지 않는다) 이 파일은 defer로 불러온다(요청 하나로 화면을 늦추지 않게).
     색 값은 common.css의 :root[data-theme] 규칙에 있다. */
(function () {
    var KEY = 'theme';
    var root = document.documentElement;
    var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

    function saved() {
        try {
            var v = localStorage.getItem(KEY);
            return v === 'light' || v === 'dark' ? v : null;
        } catch (e) {
            return null;
        }
    }
    function system() { return mq && mq.matches ? 'dark' : 'light'; }
    function apply(v) {
        if (v) root.setAttribute('data-theme', v);
        else root.removeAttribute('data-theme');
    }
    function current() { return root.getAttribute('data-theme') || system(); }

    apply(saved());

    // [지금 어두울 때 단추 이름, 지금 밝을 때 단추 이름]
    var LABEL = {
        ko: ['밝은 화면으로 보기', '어두운 화면으로 보기'],
        en: ['Switch to light theme', 'Switch to dark theme'],
        ja: ['ライト表示にする', 'ダーク表示にする'],
        zh: ['切换到浅色显示', '切换到深色显示'],
        'zh-Hant': ['切換到淺色顯示', '切換到深色顯示']
    };
    var SVG = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">';
    var SUN = SVG + '<circle cx="12" cy="12" r="4.2"/><path d="M12 2.4v2.4M12 19.2v2.4M2.4 12h2.4M19.2 12h2.4M5.21 5.21l1.7 1.7M17.09 17.09l1.7 1.7M5.21 18.79l1.7-1.7M17.09 6.91l1.7-1.7"/></svg>';
    var MOON = SVG + '<path d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a6.8 6.8 0 0 0 10.7 10.7z"/></svg>';

    function render(btn) {
        var dark = current() === 'dark';
        var lang = root.getAttribute('lang') || 'en';
        var names = LABEL[lang] || LABEL[lang.split('-')[0]] || LABEL.en;
        var name = dark ? names[0] : names[1];
        btn.innerHTML = dark ? SUN : MOON;
        btn.setAttribute('aria-label', name);
        btn.title = name;
    }

    function renderAll() {
        var all = document.querySelectorAll('.theme-toggle');
        for (var i = 0; i < all.length; i++) render(all[i]);
    }

    function makeButton(where) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'theme-toggle theme-toggle--' + where;
        btn.addEventListener('click', function () {
            var next = current() === 'dark' ? 'light' : 'dark';
            var keep = next === system() ? null : next;
            try {
                if (keep) localStorage.setItem(KEY, keep);
                else localStorage.removeItem(KEY);
            } catch (e) { /* 저장을 막은 브라우저: 이 페이지에서만 바꾼다 */ }
            apply(keep);
            renderAll();
        });
        return btn;
    }

    function init() {
        var langs = document.querySelector('.breadcrumb .lang-switch');
        if (!langs || document.querySelector('.theme-toggle')) return;
        // 단추는 두 곳에 넣고 common.css가 화면 폭에 따라 하나만 보인다.
        // 큰 화면: 메뉴줄의 언어 고르기 뒤. 폰: 머리글 오른쪽 위(폰 메뉴줄은 이미 꽉 차 있어 넣으면 두 줄이 된다).
        langs.parentNode.insertBefore(makeButton('nav'), langs.nextSibling);
        var header = document.querySelector('body > header');
        if (header) header.appendChild(makeButton('header'));
        renderAll();
        if (mq) {
            if (mq.addEventListener) mq.addEventListener('change', renderAll);
            else if (mq.addListener) mq.addListener(renderAll);
        }
        // 다른 탭에서 바꾸면 이 탭도 따라간다
        window.addEventListener('storage', function (e) {
            if (e.key === KEY || e.key === null) {
                apply(saved());
                renderAll();
            }
        });
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
