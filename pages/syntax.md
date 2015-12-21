---
layout: page
published: true
permalink: syntax/
title: 마크다운 문법 소개
description: 마크다운 문법을 소개합니다.
---

1. TOC
{:toc}

## 목차

```
* TOC (순서없는 목록)
{:toc}

* TOC (순서 목록)
{:toc}
```

## 제목 h1, h2, h3, h4

```
# h1
## h2
### h3
#### h4
```

## 두꺼운 스타일 <strong>

**두꺼운 스타일**

```
**두꺼운 스타일**
```

## 이탤릭 스타일 <em>

*이탤릭*

```
*이탤릭*
```

## 각주

This is a text with a
footnote[^1].

[^1]: And here is the definition.

```
This is a text with a
footnote[^1].

[^1]: And here is the definition.
```


## 축약어 (HTML)

This is an HTML
example.

*[HTML]: HyperTextMarkupLanguage

```
This is an HTML
example.

*[HTML]: HyperTextMarkupLanguage
```

## 자동 링크

autolink: <http://www.example.com/>


[linkid]: http://www.example.com/ "Optional Title"

## 테이블

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


## 깃헙 마크다운 도움말 페이지 링크

<https://guides.github.com/features/mastering-markdown/>





