## FireCMS

### WSL上での環境構築

PoCのため、一度ローカル上にfirebase-tools（CLI）を以下の手順でインストールした

- [Ubuntu上でのyarnのインストール手順](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)
- [Ubuntu上でのnodejsのインストール手順](https://github.com/nodesource/distributions)
- [FirebaseCliのインストール手順](https://firebase.google.com/docs/cli?hl=ja#install-cli-mac-linux)
- [FireCMSクイックスタート](https://firecms.co/docs/quickstart)
```bash
yarn create firecms-app
cd <project name>
yarn install
```

### Firebaseのセットアップ

- [Firebaseプロジェクトのセットアップ](https://firebase.google.com/docs/hosting/quickstart?hl=ja#initialize)
  - Firebaseのコンソール上でアプリが作成できていればOK
- `project_name\src\firebase-config.ts`にfirebaseConfigの値をコンソール上からコピーして貼り付ける（詳細については[App側にFirebaseプロジェクトの登録方法](https://firecms.co/docs/firebase_setup#web-app)を参照のこと）

### 手動デプロイ

```bash
# <project name>がカレントディレクトリとなっていることを確認
# ５分弱かかります
yarn deploy
```

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
