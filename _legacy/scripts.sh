#!/bin/bash

# set port
[[ -z "$2" ]] && port=3000 || port=$2

# func / start server
start() {
  php -q -S 0.0.0.0:$port -t ./
}

case "$1" in
  start)
    start
    ;;

  setup)
    # make cache directory
    if [ ! -d cache ]; then
      mkdir cache
      chmod 707 cache
      mkdir cache/view
      chmod 707 cache/view
    fi
    # copy .env
    if [ ! -f .env ]; then
      cp resource/.env.example .env
    fi
    ;;

  install)
    php ./resource/tool.php install
    ;;

  change-password)
    php ./resource/tool.php change-password "$2" "$3"
    ;;

  delete-item)
    php ./resource/tool.php delete-item "$2" "$3"
    ;;

  delete-all)
    php ./resource/tool.php delete-all
    ;;

  clear)
    php ./resource/tool.php clear
    ;;

  *)
    echo "Usage: ./action.sh {setup|install|start|change-password|delete-item|delete-all|clear}" >&2
    exit 3
    ;;

esac
