# vue-calender

## Project setup

`./docker/docker-compose.yml`でコンテナを起動します。

その後、`npm install`を実行します。

```bash
$ cd ./docker
$ docker-compose up -d
$ docker-compose exec npm install
```

### Enter the docker container console

コンテナ内のコンソールに入る場合、下記のコマンドを入力してください。

```bash
$ docker-compose exec web ash 
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
2. `./front/.env`を追加します
3. `./front/.envsample`を参考にFirebaseに登録したアプリの情報を追加してください

```
// .envの記載例
VUE_APP_FB_API_KEY=XXXXXXXXXXXXX
VUE_APP_FB_AUTH_DOMAIN=XXXXXXXXXXXXX
VUE_APP_FB_DATABASE_URL=XXXXXXXXXXXXX
VUE_APP_FB_PROJECT_ID=XXXXXXXXXXXXX
VUE_APP_FB_STORAGE_BUCKET=XXXXXXXXXXXXX
VUE_APP_FB_MESSAGING_SENDER_ID=XXXXXXXXXXXXX
VUE_APP_FB_APP_ID=XXXXXXXXXXXXX
```
