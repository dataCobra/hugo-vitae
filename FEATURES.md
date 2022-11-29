# Features

## GDPR in mind

The GDPR has many rules for third party assets, so if you don't want to think
about GDPR complaints you can disable every third party asset that is
integrated.

Some websites using webfonts from third party sites like google. This theme
brings FontAwesome and Roboto(-Slab) directly with it, without having to
integrate them via third party sites.

## Multilingual support for month names and fixed strings

### month names

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

### fixed strings

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

## FontAwesome for social icons

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

## Align images

There is now the possibility to align images to the left or right of the site.

Example: `{{< figure src="/img/my_image.png" class=alignleft >}}`

The following options for `class=` are available: right, alignright, left and alignleft.

## Site configuration options (config.toml)

 - **.Site.Params.homepage** # Enable/Disable homepage use instead of a list
 - **.Site.Params.keywords** # Add meta keywords in head part (Site Keywords or Tags of Page)
 - **.Site.Params.description** # Add meta description in head part (Site Description or Description of Page)
 - **.Site.Params.darkmode** # Enable/Disable dark mode as default
 - **.Site.Params.math** # Add math typesetting with KaTeX (Global with this param)
 - **.Site.Params.customcss** # Add path to customcss you want to add to the theme
 - **.Site.Params.customjs.enabled** # Enable/Disable customjs
 - **.Site.Params.customjs.src** # add the source path
 - **.Site.Params.customjs.referrerpolicy** # specifies which referrer information to send when fetching the script
 - **.Site.Params.customjs.nomodule** # specifies that the script should not be executed in browsers supporting ES2015 modules
 - **.Site.Params.customjs.integrity** # allows a browser to check for integrity to ensure the code hasn't been manipulated
 - **.Site.Params.customjs.defer** # execute the script when page has finished parsing (external only)
 - **.Site.Params.customjs.crossorigin** # sets the mode of the request to an http cors request
 - **.Site.Params.customjs.async** # executes the script asynchronously (external only)
 - **.Site.Params.pagetitle** # Add pagetitle to homepage <title> tag
 - **.Site.Params.avatar** # Add a avatar to your website
 - **.Site.Params.subtitle** # Add a subtitle to your website
 - **.Site.Params.social** # Add different social links to your website
 - **.Site.Params.readingTime** # Show reading time for a post
 - **.Site.Params.wordCount** # Show word count for a post
 - **.Site.Params.hideAuthor** # Show author for a post
 - **.Site.Params.excludedTypes** # Exclude specific types in lists
 - **.Site.Params.mainSections** # Add list of sections that should show up on the homepage
 - **.Site.Params.nofeedSections** # Add list of sections/types that should not be considered by RSS
 - **.Site.Params.fullRSS** # Use a full HTML representation of the articles in the RSS feed
 - **.Site.Params.disableTaxoTypes** # Deactivate taxonomies for specific page types
 - **.Site.Params.favicon** # Activate favicons for the website
 - **.Site.Params.comments.enabled** # Enable/Disable comments for website entirely
 - **.Site.Params.comments.engine** # Either disqus or commento to choose from
 - **.Site.Params.comments.disableOnTypes** # Deactivate comments for specific page types
 - **.Site.Params.comments.disqus.shortname** # New param for the shortname of a disqus instance
 - **.Site.Params.comments.commento.host** # Domain http/s of commento.io system of choice

## Front matter options for content

 - **.Params.tags** # https://gohugo.io/variables/page/#page-level-params
 - **.Params.nofeed** # Don't add page to RSS file
 - **.Params.math** # Add math typesetting with KaTeX to a specific page
 - **.Params.author** # Add the author of a page
 - **.Params.authorlink** # Add the create a link to a page of the author
 - **.Params.notaxonomy** # Don't show this list of taxnomoies below the content
 - **.Params.type** # https://gohugo.io/content-management/types/
 - **.Params.commentable** # Enable/Disable comments for this specific page
 - **.Params.hidden** # Hide page from the mainSections on the homepage
 - **.Params.norobots** # Disallow page in robots.txt for search engines
 - **.Params.nodate** # Hide the publish date of specific content
 - **.Params.image** # Add an image to the post
 - **.Params.imagetext** # Add alternate text for the image to the post
 - **.Params.hidemeta** # Hide the metadata (readingTime, wordCount and Author)

**Examples for site configuration and front matter can be found in `examples/`.**
