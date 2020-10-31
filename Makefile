clear:
	rm -rf dist
	rm -f dist.tar.gz

dev:
	ng serve --proxy-config proxy.conf.json

build:
	ng build --prod
	tar -czf dist.tar.gz dist

deploy:
	./deploy-manual.sh

local1:
	ng build --watch

local2:
	npm run dev --baseDir="dist"

cd: clear build deploy

.PHONY: clear dev build deploy cd

