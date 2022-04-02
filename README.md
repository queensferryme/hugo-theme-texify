# TeXify

A minimal, latex-style hugo theme for personal blogging.

![screenshot](https://raw.githubusercontent.com/queensferryme/hugo-theme-texify/master/images/screenshot.png)

## Features

- [Disqus](https://disqus.com/) & Google Analytics included
- Responsive design for mobile devices
- Customize the site with your own stylesheets
- Math equations powered by [KaTeX](https://katex.org/) or [MathJax](https://www.mathjax.org/)
- Minimal CSS, No JavaScript, Blazing Fast!

## Usage

Install with:

```bash
git submodule add https://github.com/queensferryme/hugo-theme-texify.git themes/hugo-theme-texify
```

Upgrade with:

```bash
git submodule foreach git pull origin master
```

See [`config.toml`](https://github.com/queensferryme/hugo-theme-texify/blob/master/config.toml) for an example configuration.

Note that for Simplified Chinese users, it is recommended to use [Noto Serif SC](https://fonts.google.com/specimen/Noto+Serif+SC) via Google Fonts. You may put the following codes in your `static/css/custom.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;700&display=swap');

#wrapper {
    font-family: 'Latin Modern Roman', 'Times New Roman', 'Noto Serif SC', serif;
}
```

## Development

```bash
make dev
```

## Acknowledgement

The design of this theme is inspired by the following softwares:

- https://github.com/vincentdoerig/latex-css
- https://github.com/7ma7X/HugoTeX
- https://theme.typora.io/theme/Academic/
