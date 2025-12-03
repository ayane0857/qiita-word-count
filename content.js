(function () {
    const editors = document.querySelectorAll('.cm-content.cm-lineWrapping');
    const gutters = document.querySelectorAll('.cm-gutterElement');


    if (editors.length === 0) {
        alert('エディタが見つかりませんでした。');
        return;
    }

    if (gutters.length === 0) {
        alert('行番号エリアが見つかりませんでした。');
        return;
    }

    let text = '';

    editors.forEach(div => {
        text += div.textContent;
    });

    const lastGutter = gutters[gutters.length - 1].textContent;
    const truetext = text.replace(/\s+/g, '');

    alert(`文字数: ${text.length}（${truetext.length}）文字\n行数: ${lastGutter}行`);
})();