script="$(basename "$(test -L "$0" && readlink "$0" || echo "$0")")"

case "$1" in

  build)
    docker buildx build --platform=linux/amd64 -t redgoose/slideshow.redgoose.me:latest .
    ;;

  upload)
    docker save redgoose/slideshow.redgoose.me:latest | ssh -C goose@redgoose.me 'cd ~/docker/slideshow && docker load'
    ;;

  upgrade)
    docker buildx build --platform=linux/amd64 -t redgoose/slideshow.redgoose.me:latest .
    docker save redgoose/slideshow.redgoose.me:latest | ssh -C goose@redgoose.me 'cd ~/docker/slideshow && docker-compose down && 
docker load && docker-compose up -d && cd ../service && ./cmd.sh service reload'
    ;;

  *)
    echo "Usage: ${script} {build|upload|upgrade}" >&2
    exit 3
    ;;

esac
