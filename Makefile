build:
	if [ ! -d "../hugo-theme-texify" ]; then \
		git clone https://github.com/queensferryme/hugo-theme-texify.git \
		../hugo-theme-texify; \
	fi
	hugo \
	--config="exampleSite/config.toml" \
	--contentDir="exampleSite/content" \
	--gc \
	--minify \
	--themesDir=".."

dev:
	hugo server \
	--buildDrafts \
	--config="exampleSite/config.toml" \
	--contentDir="exampleSite/content" \
	--disableFastRender \
	--themesDir=".."

