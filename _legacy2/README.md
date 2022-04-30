# slideshow-service

Using slideshow service

## Install

다음 명령어들을 실행하여 `.env`파일을 복제해 줍니다.

```shell
cp .env .env.local
yarn install
```

## Development

```shell
yarn run dev
```

## Production

```shell
yarn run build
yarn run start
```

### With [PM2](http://pm2.keymetrics.io)

```bash
$ cd /goose-manager
$ /usr/bin/pm2 start -l 0 npm --name "slideshow-service" -- start
```
