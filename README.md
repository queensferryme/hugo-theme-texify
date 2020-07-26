# TeXify

A minimal, latex-style hugo theme for personal blogging.

![screenshot](https://raw.githubusercontent.com/queensferryme/hugo-theme-texify/master/images/screenshot.png)

## Features

- [Disqus](https://disqus.com/) & Google Analytics included
- Responsive design for mobile devices
- Optimized typography for Simplified Chinese
- Math equations powered by [MathJax](https://www.mathjax.org/)
- Minimal CSS, No JavaScript, Blazing Fast!

## Usage

```bash
git clone https://github.com/queensferryme/hugo-theme-texify.git themes/hugo-theme-texify
```

See `exampleSite/config.toml` for an example configuration.

## Development

```bash
hugo server \
    --buildDrafts \
    --config="exampleSite/config.toml" \
    --contentDir="exampleSite/content" \
    --disableFastRender \
    --themesDir=".."
```
