## SampleApp

### Next.jsのボイラーテンプレート作成

以下の手順でNode.jsの実行用コンテナーを作成する。なお、コンテナーイメージは軽量でローカル上の動作には定評があるalpineを使用。

```powershell
# Dockerfileが存在するディレクトリ上で実行
# イメージ作成
docker build -t node_alpine_work:v0 .
# コンテナ作成
docker run --rm -it -p 3000:3000 -v C:/Users/besta/app/pipeline/poc-frontend-app:/usr/src/app node_alpine_work:v0 sh
# 起動済みのコンテナにアタッチ（bashで実行）
docker exec -it $(docker ps | grep node_alpine_work | awk -F' ' '{print $1}') sh
```

コンテナーにシェルをアタッチして、以下コマンドを実行してNext.jsのボイラーテンプレートを作成する。

```bash
# next.jsのテンプレート作成コマンド
yarn create next-app
```

### jestの導入

[このページ](https://qiita.com/mktu/items/d36416baba155dfecc00)を参考にして、JSの単体テスト実行ライブラリであるjestを導入する。

```bash
yarn add --dev jest @types/jest ts-jest
yarn ts-jest config:init
```

#### jestのテスト書き方

- [簡単な書き方参考](https://qiita.com/hogesuke_1/items/8da7b63ff1d420b4253f)
    - ESをCommonJSへ変換してjestが動作するようにするプラグインの紹介もあり
- [非同期処理の単体テスト参考](https://jestjs.io/docs/tutorial-async)
