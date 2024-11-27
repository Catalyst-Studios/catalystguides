---
title: Images
description: How to format images in Catalyst Guides!
icon: material/image-area
---

# Media Formatting

## Image Formatting

You can add images with optional captions using:

The captions show below the image when you click on it.

```
![optionalCaption](pathToImage.png)
```
<div class="result" markdown>
![optionalCaption](img/exampCatyLogo.png)
</div>

---

### Image Resizing

You can resize images using CSS.

```
![](pathToImage.png){width='300px' height='300px'}
```
<div class="result" markdown>
![](img/exampCatyLogo.png){width='300px' height='300px'}
</div>

---

### Image Alignment

You can align images with `.left`, `.center`, or `.right`. You can add CSS attributes to aligned images as well!

```
![](pathToImage.png){.left width='100px' height='100px'}

![](pathToImage.png){.center}

![](pathToImage.png){.right}
```
<div class="result" markdown>
![](img/exampCatyLogo.png){.left width='100px' height='100px'}

![](img/exampCatyLogo.png){.center width='100px' height='100px'}

![](img/exampCatyLogo.png){.right width='100px' height='100px'}
</div>

---

### Images with Links

You can add links to images by putting the [image syntax](#image-formatting) within the [hyper link syntax](formatting.md#adding-hyperlinks).

```
[![](pathToImage.png)](https://www.example.com/)
```
<div class="result" markdown>
[![](img/exampCatyLogo.png){width='300px' height='300px'}](https://www.example.com/)
</div>

---

### Dark & Light Mode Images

You can append `#only-dark` or `#only-light` to the end of the image path to have different images for dark and light mode of Catalyst Guides.

Click the **:material-weather-night:** or **:material-weather-sunny:** in the header to see the example!

```
![](img/pathToDarkImage.png#only-dark)
![](img/pathToLightImage.png#only-light)
```
<div class="result" markdown>
![](img/prDarkExamp.png#only-dark)
![](img/prLightExamp.png#only-light)
</div>

---

## Gifs

You add [gifs](https://howtoreallypronouncegif.com) the same way you add images.

`![](pathToGif.gif)`

---

## Videos

You can link `mp4` files using:

`![type:video](pathToVideo.mp4)`

You can also embed YouTube videos using:

`https://youtube.com/embed/<videoID>`
