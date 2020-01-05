# vue-calender

## Project setup

`./docker/docker-compose.yml`でコンテナを起動します。

その後、`npm install`を実行します。

```bash
$ cd ./docker
$ docker-compose up -d
$ docker-compose exec npm install
```

### Compiles and hot-reloads for development

```bash
$ docker-compose exec web npm run serve
```

### Compiles and minifies for production
```bash
$ docker-compose exec web npm run build
```

### Lints and fixes files
```bash
$ docker-compose exec web npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Overview

[Build a Calendar With Vue, Vuetify & Firebase](https://www.youtube.com/watch?v=2NOsjTT1b_k) の動画内容をDocker環境で実施しました。
動画は、vuetifyのカレンダーコンポーネントにFirebaseを用いたCRUD機能を実装する内容となっております。
(vuetify Component Reference: https://vuetifyjs.com/en/components/calendars)

Firebaseの機能に関しましては、`class`を作成しているため、一部動画と実装が異なります。

### Addition Dependencies

```vue-textarea-autosize```を確認してください。
( https://www.npmjs.com/package/vue-textarea-autosize)

### Setting Up Firebase

1. Firebase のFirestore を設定してください
2. `./front/src/Utils/FirebaseManager.js`にFirebaseに登録したアプリの情報を追加してください

```javascript
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'ウェブ API キー',
  authDomain: '公開名',
  projectId: 'プロジェクト ID'
})
```