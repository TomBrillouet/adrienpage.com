PROJECT_NAME := testadricom
ENV_FILE := ../.env
COMPOSE_CMD := $(shell docker compose version >/dev/null 2>&1 && echo "docker compose" || echo "docker-compose")
UID := $(shell id -u)
GID := $(shell id -g)

up:
	set -a; [ -f $(ENV_FILE) ] && . $(ENV_FILE); set +a; \
	UID=$(UID) GID=$(GID) $(COMPOSE_CMD) -p $(PROJECT_NAME) up -d --build

down:
	set -a; [ -f $(ENV_FILE) ] && . $(ENV_FILE); set +a; \
	UID=$(UID) GID=$(GID) $(COMPOSE_CMD) -p $(PROJECT_NAME) down --volumes --remove-orphans --rmi all
	docker network prune -f
