# slideshow-service

Slideshow service

## Install

먼저 모듈설치와 `.env`파일 만들어준다.

```shell
yarn install
yarn run tool install
```

`.env` 파일을 데이터베이스 환경에 맞도록 수정

```shell
yarn run tool setup-database
```

데이터베이스 테이블 설치한다.


## Development

```shell
yarn run dev
```

## Production

```shell
yarn run build
yarn run start
```

### With PM2

```shell
HOST=0.0.0.0 PORT=7002 /usr/bin/pm2 start -l 0 npm --name "slideshow.redgoose.me" --log-date-format='YYYY-MM-DD HH:mm:ss.SSS' -- start
```

ps. `npm`으로 사용한다.
