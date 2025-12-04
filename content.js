(function () {
    const editors = document.querySelectorAll('.mdContent-inner');

    if (!editors.length) {
        alert('エディタが見つかりませんでした。');
        return;
    }

    // 複数の要素がある場合、改行で繋げて取得
    const rawText = Array.from(editors)
        .map(div => div.textContent)
        .join('\n');

    // 空白（スペース、改行、タブ）をすべて削除したもの
    const textNoSpace = rawText.replace(/\s+/g, '');

    // 結果を表示
    alert(
        `【文字数カウント結果】\n` +
        `------------------------\n` +
        `空白なし: ${textNoSpace.length} 文字\n` +
        `空白込み: ${rawText.length} 文字`
    );
})();