Execute /**npm run images**/ after adding the images to image folder to generate images.js

Execute /**npm run fonts**/ after adding the fonts to font folder to generate fonts.js(Make sure to name the font file as it is displayed in font book)

```js
module.exports = {
  project: {
    ios: {},
    android: {}, // grouped into "project"
  },
  assets: ['./src/res/fonts'], // for exporting fonts
};
```
