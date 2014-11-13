# PKbaseline


## OOCSS  inuitcss.com

PKbaseline is based on inuitcss frontend framework. As with any object-based coding method, the purpose of OOCSS is to encourage code reuse
and, ultimately, faster and more efficient stylesheets that are easier to add to and maintain.
Almost every element on a styled Web page has different visual features (i.e. “skins”) that are repeated in different contexts. Think of a website’s branding — the colors, subtle uses of gradients, or visible borders. On the other hand, other generally invisible features (i.e. “structure”) are likewise repeated.
                                                                                                                                                When these different features are abstracted into class-based modules, they become reusable and can be applied to any element and have the same basic result.


## naming conventions
Pkbaseline relies on _structured class names_ and _meaningful hyphens_ in style of the BEM.
BEM – meaning block, element, modifier – is a front-end naming methodology.
This helps to work around the current limits of applying CSS to the DOM and to better communicate
the relationships between classes.


<a name="components"></a>
## [Components](components.md)

Components are UI patterns. They usually need to style multiple elements within
their HTML tree.

Syntax: `[<namespace>-]<component-name>[--modifier-name|__descendant-name]`

This has several benefits when writing CSS and reading HTML:

* It helps to distinguish classes for base components, modifiers of components,
  and child elements.
* It keeps the specificity of selectors low.
* It helps to decouple presentation semantics from document semantics.

```css
.site-search {} /* Block */
  .site-search__field {} /* Element */
  .site-search--full {} /* Modifier */
```

```html
.site-search {} /* Block */
  .site-search__field {} /* Element */
  .site-search--full {} /* Modifier */
```


## Other

<a name="js--some-name"></a>
### js--some-name

**CSS must not use `js--*` classes in selectors.**

Use the `id` attribute and `js--*` class names are reserved for JavaScript-only
use. Application-specific data or content can be stored in `data-*`
attributes.

The example below includes a dedicated JavaScript reference class to which
behaviour is bound. It is independent of any specific UI component.

```html
<a class="js--show-profile" data-username="John Doe" href="{url}">...</a>
```


##Indenting

Multi-line CSS

CSS should be written across multiple lines, except in very specific circumstances. There are a number of benefits to this:

A reduced chance of merge conflicts, because each piece of functionality exists on its own line.
More ‘truthful’ and reliable diffs, because one line only ever carries one change.
Exceptions to this rule should be fairly apparent, such as similar rulesets that only carry one declaration each, for example:

.icon {
    display: inline-block;
    width:  16px;
    height: 16px;
    background-image: url(/img/sprite.svg);
}

.icon--home     { background-position:   0     0  ; }
.icon--person   { background-position: -16px   0  ; }
.icon--files    { background-position:   0   -16px; }
.icon--settings { background-position: -16px -16px; }


### comments

```css
/**
 * CONTENTS
 *
 * COMPONENT
 * Subcomponent...............description.
 * Subcomponent...............description.
 * Subcomponent...............description.
 *
 * COMPONENT
 * Subcomponent...............description.
 * Subcomponent...............description.
 * Subcomponent...............description.
 *
 */
```

##Titling

Begin every new major section of a CSS project with a title:

```html
/*------------------------------------*\
    #SECTION-HEADER
\*------------------------------------*/
```

## Automated visual CSS testing

For
Introduce some automated CSS testing into your workflow for more time making and less time checking.

A CasperJS module for automating visual regression testing with PhantomJS and Resemble.js. For testing Web apps, live style guides and responsive layouts




### Phantomcss

### Photobox







## Hologram

`http://alistapart.com/article/creating-style-guides`

Hologram is a Ruby gem that parses comments in your CSS and turns them into a beautiful style guide. Your documentation is written right in your CSS files using a combination of YAML and Markdown. By using Markdown, you can easily format your docs anyway you want.

On top of Hologram there is a nice Cortana theme.

Style guides save development time, make communication designer, frontender, developer smoother, and keep both code and design consistent throughout the site.

The living styleguide documents the brand’s visual style and commonly used HTML, CSS, and JavaScript components. It includes functional examples and sample markup, and acts as an entry point for both product prototyping and development.

The styleguide can be viewed by visiting `build/styleguide/index.html`



## SVG icons

SVG icons have become a good replacement for bitmap files and font icons. We use some grunt scripts and node-js modules to automate the generation and minification of the svg and css files.

* grunt-svgmin – Minimizes SVG files
* grunt-grunticon – Generates and paints CSS and PNG files.

Just put the exported svg files in the `svg_icons/raw` directory.
Then run `grunt icon`

* grunt-contrib-clean – Cleans directories before running the task
* grunt-svgmin – Minimizes SVG files
* grunt-grunticon – Generates and paints CSS and PNG files.

A full list of generated icons with  `build/svg_icons/preview.html`




























=============

# kop1
## kop2
### kop3
#### kop4
##### kop5
###### kop6

# This is the Pixelkings frontend starter kit for creating a website from scratch. The main components are:

SASS OOCSS framework from Harry Roberts



- Inuit
- CSS visual diffing tool: Photobox (page-level)
- CSS visual diffint tool: PhantomCSS (component level)
- Living Style Guide: Holograme (with a Cortana template)
-


##BEM
Naming convention ....

##SMACSS
Architecture of the stylesheet

##Icons


##INSTALLING

`npm install -g grunt`


`npm install -g bower`

`gem install bundler`

`git clone https://github.com/pixelkings/pkbaseline.git`

`npm install`

`grunt`