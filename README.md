# laravel-template

Docker を使った Laravel 開発環境のテンプレートです。

## 構成

|  サービス  |    ベースイメージ    |
| :--------: | :------------------: |
|   nginx    |     nginx:1.24.0     |
|    app     | php:8.2-fpm-bullseye |
|     db     |    mariadb:10.11     |
| phpmyadmin |   phpmyadmin:5.2.1   |
|   redis    |       redis:7        |

### [Laravel - Redis](https://laravel.com/docs/10.x/redis)

**サポート**

-   phpredis
-   predis

**設定**

-   `.env` の `REDIS_CLIENT` で切り替え

## ツール

### 静的コード解析

-   [phpstan](https://phpstan.org/)
    -   [larastan](https://github.com/nunomaduro/larastan)
    -   github actions でプルリクエスト作成時に自動実行（PHP ファイルが変更されていれば）
    -   レベル 8
    -   `docker compose exec app ./vendor/bin/phpstan analyze --memory-limit=2G`

## 使い方

### リポジトリの作成

URL: https://github.com/Nave-wata/laravel-template

1. `Use this template`
2. `Create a new repository`
3. `Include all branches` にチェック
4. リポジトリ名などを入力後， `Create repository`

### ローカル環境の構築

1. リポジトリをクローン

2. react-redis ブランチに移動

```shell
$ git checkout react-redis
```

3. アプリケーションを起動

```shell
$ docker-compose up -d
```

4. アクセス

-   アプリケーション: http://localhost
-   phpmyadmin: http://localhost:8080
