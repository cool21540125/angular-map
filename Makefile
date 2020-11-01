clear:
	rm -rf dist
	rm -f dist.tar.gz

dev:
	# ng serve --proxy-config src/proxy.conf.js
	ng serve

build:
	ng build --prod
	tar -czf dist.tar.gz dist

deploy:
	./deploy-manual.sh

cd: clear build

.PHONY: clear dev build deploy cd

