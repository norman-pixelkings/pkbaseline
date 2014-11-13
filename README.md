# PKbaseline


# naming conventions
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