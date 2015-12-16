---
layout: page
published: true
permalink: syntax/
title: 마크다운 문법 소개
description: 마크다운 문법을 소개합니다.
---

* TOC
{:toc}


This is a text with a
footnote[^1].

This is an HTML
example.

*[HTML]: HyperTextMarkupLanguage


[linkid]: http://www.example.com/ "Optional Title"

:smile:

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

```
<script>
    alert('test');
</script>
```

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell
{: .table}


|  Left-Aligned |  Center Aligned | Right Aligned |
| :------------ | :-------------: | ------------: |
| col 3 is      | some wordy text |         $1600 |
| col 2 is      |     centered    |           $12 |
| zebra stripes |     are neat    |            $1 |
{: .table}

~~~~~~
This is also a code block.
~~~
Ending lines must have at least as
many tildes as the starting line.
~~~~~~~~~~~~

<https://github.com/isaacs/github/issues/215>



[^1]: And here is the definition.





