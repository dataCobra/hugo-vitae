# Vitae
... is a blog theme for Hugo that **focuses on your content** with some cool new **features**.  
Forked from  [Hugo-Ink](https://github.com/knadh/hugo-ink).

## Demo
![Screenshot](https://raw.githubusercontent.com/dataCobra/hugo-vitae/master/images/screenshot.png)

## Features

All Features with a **(+)** infront of it are new with Vitae and form the foundation of the theme.
For more explanation about some features, scroll down to **Features**

* **(+)** Easy to use, even with GDPR in mind
* **(+)** Optimized responsiveness for all kinds of devices
* **(+)** Multilingual support for fixed strings
* **(+)** Choose every free FontAwesome icon for the social navbar
* **(+)** FontAwesome and Roboto(-Slab) as local used fonts
* **(+)** Third party services can be completely turned off
* Multilingual support for month names
* Syntax highlighting
* Custom CSS
* RSS feeds
* Disqus comments
* Google Analytics integration
* Twitter cards and opengraph tags integration

In the future there will be many more cool features.

## Installation

change your current work directory into the root directory of your hugo site
and clone the repository:

```sh
cd themes
git clone https://github.com/datacobra/hugo-vitae.git hugo-vitae
```

For more information about installation read the
[official setup guide](https://gohugo.io/overview/installing/) of Hugo.

## Features

### GDPR in mind

The GDPR has many rules for third-party assets, so if you don't want to think
about GDPR complaints you can disable every third-party asset that is
integrated.

Some websites using webfonts from third-party sites like google. This theme
brings FontAwesome and Roboto(-Slab) directly with it without having to
integrate them via third-party sites.

### Setting the month names in another language

Due to the currently unavailable feature for multilingual dates in `.Date`
from Go. It is possible to create a `month.yaml` in the data folder of your
Hugo site root directory. There is also an example file in
`exampleSite/data/`.

```sh
cat > month.yaml << EOF
1: "Jan"
2: "Feb"
3: "Mar"
4: "Apr"
5: "May"
6: "Jun"
7: "Jul"
8: "Aug"
9: "Sep"
10: "Oct"
11: "Nov"
12: "Dec"
EOF
```

### Setting the language for the fixed strings

There are some fixed strings in the html files that normally uses only the set
language. But if you create a folder `i18n/` in the root directory of your
hugo site and copy the `en.yaml` that comes with the theme you can edit the
fixed strings to your liking. Don't forget to also set
`defaultContentLanguage = "en"` to the new language.

```sh
mkdir i18n
cd i18n
cp ../themes/hugo-vitae/i18n/en.yaml en.yaml
# Edit the new language file
```

### FontAwesome for social icons

FontAwesome is mainly used for the icons of the social navbar in the top right
corner of the theme. In the config of your hugo website there is a param
called `icon` for the `params.social` section. I could look like this:

```toml
[[params.social]]
name = "Github"
icon = "fab fa-github"
url = "https://github.com/dataCobra/hugo-vitae"
```

On the [FontAwesome](https://fontawesome.com) website, you can look up every
free icon and also the information you need to put into this `icon` param.

### Disqus

You can enable Disqus if you set `disqusShortname`. You are also able to
specify which content types you want to disable Disqus for. There is more info
about this feature in the section **Content type** below.

### Content type

You can specify content type with field `type` in your content. For example
static pages can be set as type `page` which are excluded from recent posts
and all posts page. You can use site params `mainSections` and
`disableDisqusTypes` to control which page types are excluded from recent
posts and Disqus comments respectively.

```md
---
title: "About"
date: 2019-04-19T21:37:58+05:30
type: "page"
---

This is some static page where you can write about yourself.
```

## Credits

* [hugo-ink](https://github.com/knadh/hugo-ink) from which Vitae was forked
* [freepik](https://www.freepik.com) for the robot avatar
* [google](https://fonts.google.com/specimen/Roboto) for the roboto fonts
* [fontawesome](https://fontawesome.com) for providing amazing icons

Licensed under the [GPL-2.0](https://raw.githubusercontent.com/dataCobra/hugo-vitae/master/LICENSE.md).
