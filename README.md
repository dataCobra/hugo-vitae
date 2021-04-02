# Vitae
... is a blog theme for Hugo that **focuses on your content**.

## :information_source: Version 3.0 is currently in development

Currently I am working on the final version of Vitae, which will be
version 3. 

If you want to test the version while it is still in
development, just use the git "develop" branch.

But if you encounter a bug or problem, consider writing an issue.

## Demo

You can have a look on https://themes.gohugo.io.
[Link to demo](https://themes.gohugo.io/theme/hugo-vitae/)

![Screenshot](https://raw.githubusercontent.com/dataCobra/hugo-vitae/master/images/screenshot.png)

## List of Features

Here is a short list with some of the features that are available for
Hugo-Vitae.

For more explanation about various features, scroll down to **Features**

* Easy to use, even with GDPR in mind
* Improved <head> part for SEO
* Optimized responsiveness for all kinds of devices
* Multilingual support for month names and other fixed strings
* Various front matter and configuration options for more flexible use.
* RSS feed
* Comments with commento.io or disqus (optional)
* Google Analytics integration (optional)
* Twitter cards and Open Graph tags integration
* Images for post headers
* Use of a homepage instead of a list of posts
* Thumbnail Article or Post
* And some other cool features...

## Installation

### Stable

Download the [latest stable release](https://github.com/dataCobra/hugo-vitae/releases/latest).
It's available as `.zip` or `.tar.gz`. Decompress it into your `themes/` folder.

### Development

Change your current work directory into the root directory of your Hugo site
and clone the repository:

```sh
cd themes
git clone https://github.com/datacobra/hugo-vitae.git hugo-vitae
```

For more information about installation read the
[official setup guide](https://gohugo.io/overview/installing/) of Hugo.

## Features

### GDPR in mind

The GDPR has many rules for third party assets, so if you don't want to think
about GDPR complaints you can disable every third party asset that is
integrated.

Some websites using webfonts from third party sites like google. This theme
brings FontAwesome and Roboto(-Slab) directly with it, without having to
integrate them via third party sites.

### Multilingual support for month names and fixed strings

#### month names

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

#### fixed strings

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
corner of the theme. In the config of your Hugo website there is a param
called `icon` for the `params.social` section. I could look like this:

```toml
[[params.social]]
name = "Github"
icon = "fab fa-github"
url = "https://github.com/dataCobra/hugo-vitae"
```

On the [FontAwesome](https://fontawesome.com) website, you can look up every
free icon and also the information you need to put into this `icon` param.

### Site configuration options

All configuration options can be looked up in the `exampleSite/config.toml`.

### Front matter options

**math(bool)**

Add math typesetting with KaTeX to the content page.

**author(string) and authorlink(string)**

Add author of a page and if you want, add a link to the author.

**nofeed(bool)**

Don't add page to RSS.

**notaxonomy(list)**

Disable specific taxonomies for a page.

**commentable(bool)**

Enable/Disable comments for this specific page.

**hidden(bool)**

Hide page from the mainSection of the homepage.

**norobots(bool)**

Disallow page in robots.txt for search engines.

**nodate(bool)**

Hide the publish date of the page. Useful for about pages or pages required
for legal reasons.

**image(string)**

Add an image with /path/to/img to your post. If the path of the image in the
hugo site directoy is /static/img/picture.jpg, the correct path for the front
matter is /img/picture.jpg.

**imagetext(string)**

This is the alternate text for the image that could be added via image front
matter.

## Credits

* [freepik](https://www.freepik.com) for the avatar
* [google](https://fonts.google.com/specimen/Roboto) for the roboto fonts
* [fontawesome](https://fontawesome.com) for providing amazing icons

Licensed under the [GPL-2.0](https://raw.githubusercontent.com/dataCobra/hugo-vitae/master/LICENSE.md).
