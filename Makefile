build:
	if [ ! -d ../hugo-theme-texify ]; then \
		git clone https://github.com/queensferryme/hugo-theme-texify.git ../hugo-theme-texify; \
	fi
	hugo --contentDir=exampleSite/content --gc --minify --themesDir=..

dev:
	hugo server --contentDir=exampleSite/content --disableFastRender --themesDir=..
