build:
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

