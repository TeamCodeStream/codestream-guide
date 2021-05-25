---
title: Markdown
description: 
---

You can use markdown to format just about any content you create on CodeStream.

## Headers

```
# This is an <h1> tag
## This is an <h2> tag
###### This is an <h6> tag
```

## Emphasis

```
*This text will be bold*
**This text will also be bold**
__And this will be bold too__

_This text will be italic_

~~This text will be strikethrough~~
```

## Lists
### Unordered

```
+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!
```

### Ordered

```
1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar
```

## Images

```
![Minion](https://octodex.github.com/images/minion.png)
Format: ![Alt Text](url)
```

## Links

```
[link text](http://dev.nodeca.com)
[link with title](http://nodeca.github.io/pica/demo/ "title text!")
```

## Blockquotes

```
> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.
```

## Code

````
Inline `code`

Code Fence

``` 
js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```
````

## Tables

```
| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
```

Right aligned columns

```
| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
```