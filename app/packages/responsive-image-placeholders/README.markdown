# Responsive Image Placeholders

Using a little basic CSS, JavaScript and a dash of animation it's simple to avoid the performance hit of re-calculating layout and provide a smooth user experience.

* [Original article](http://maketea.co.uk/2013/05/04/responsive-image-placeholders.html)
* [View demo](http://i-like-robots.github.io/Responsive-Image-Placeholders/)

## Usage

```html
<div class="defer-image image-ratio:2x1 image-fill">
  <div data-src="http://placekitten.com/960/480" data-alt="A lovely kitten"></div>
</div>
```

```javascript
var placeholders = document.querySelectorAll('.defer-image');

for (var i = 0, len = placeholders.length; i < len; i++) {
    deferImage(placeholders[i]);
}
```

## License

This work is licensed under a [Creative Commons Attribution-ShareAlike 3.0 Unported License](http://creativecommons.org/licenses/by-sa/3.0/).
