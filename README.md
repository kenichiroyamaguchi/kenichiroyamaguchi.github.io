# kenichiroyamaguchi.com

フォトグラファー山口健一郎のポートフォリオサイト。

公開URL: https://kenichiroyamaguchi.com
（GitHub Pages で公開。`main` ブランチに push すると数分で反映される）

## ファイル構成

| 場所 | 中身 |
|---|---|
| `index.html` | トップページ。ヘッダー・Works・About が1枚に入っている |
| `about.html` / `contact.html` | 個別ページ |
| `css/style.css` | デザイン全体 |
| `js/slideshow.js` | ヘッダー写真の切り替え |
| `js/transition.js` | Works と About の切り替え |
| `images/works/` | 作品写真（`t0001.jpg` からの連番） |
| `images/header/` | ヘッダーのスライドショー用 |
| `CNAME` | 独自ドメインの設定。触らない |
| `sitemap.xml` / `robots.txt` | 検索エンジン向け |

## 注意: About の文章は2か所にある

同じ経歴文が `index.html` の `about-section` と `about.html` の両方にある。トップページ内で切り替えて見せる用と、検索から直接来た人が見る独立ページ用。**片方だけ直すと食い違うので、経歴を変えるときは必ず両方を直す。**

## 作品の追加

作品データは `index.html` の後半にある `projects` という一覧に書かれている。新しいものが上。

```js
{ tag: '案件名', date: '2026.07', images: [
    'images/works/t0513.jpg',
    'images/works/t0514.jpg'
] },
```

手順:

1. 写真を圧縮する（長辺 1600px 前後、ファイルサイズ 300KB 以内が目安）
2. `images/works/` に、既存の続き番号で置く
3. `projects` の先頭に上のような形で追記する
4. GitHub Desktop で Commit → Push origin

1ページに10件ずつ表示され、それ以降は「past →」で次のページに送られる。
