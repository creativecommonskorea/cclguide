---
layout: page
published: true
permalink: syntax/
title: 마크다운 문법 소개
description: 마크다운 문법을 소개합니다.
date: "2016-01-22 23:17 +0900"
related_contents_show: false
related_contents: ""
quiz_show: true
quiz: 
  - title: "CC-BY-SA 이미지를 CC-BY 블로그에 가져다 쓸 수 있다."
    answer: right
    description: "\"예, 쓸 수 있습니다. SA는 동일조건변경허락으로 이미지를 크롭하거나 다른 것과 합성하는 등 변경하지 않는다면 반드시 BY-SA의 조건을 그대로 가져올 필요는 없습니다. 단, 변경을 할 시에는 BY-SA를 블로그와 별개로 이미지에 표기해주셔야 합니다.\"\n"
  - title: CC 라이선스는 저작권에 반대하는 라이선스이다.
    answer: wrong
    description: "CC는 저작권에 반대하는 것이 아닙니다. CCL은 저작권자로 하여금 좀 더 유연하고 열린 방법으로 저작권을 보유하고 관리할 수 있도록 도와줍니다. 사실 CCL은 그 실효성을 저작권법에 의존하고 있습니다.\n"
  - title: "CC-BY-SA 이미지를 CC-BY 블로그에 가져다 쓸 수 있다."
    answer: right
    description: "\"예, 쓸 수 있습니다. SA는 동일조건변경허락으로 이미지를 크롭하거나 다른 것과 합성하는 등 변경하지 않는다면 반드시 BY-SA의 조건을 그대로 가져올 필요는 없습니다. 단, 변경을 할 시에는 BY-SA를 블로그와 별개로 이미지에 표기해주셔야 합니다.\"\n"
  - title: CC 라이선스는 저작권에 반대하는 라이선스이다.
    answer: wrong
    description: "CC는 저작권에 반대하는 것이 아닙니다. CCL은 저작권자로 하여금 좀 더 유연하고 열린 방법으로 저작권을 보유하고 관리할 수 있도록 도와줍니다. 사실 CCL은 그 실효성을 저작권법에 의존하고 있습니다.\n"
  - title: "CC-BY-SA 이미지를 CC-BY 블로그에 가져다 쓸 수 있다."
    answer: right
    description: "\"예, 쓸 수 있습니다. SA는 동일조건변경허락으로 이미지를 크롭하거나 다른 것과 합성하는 등 변경하지 않는다면 반드시 BY-SA의 조건을 그대로 가져올 필요는 없습니다. 단, 변경을 할 시에는 BY-SA를 블로그와 별개로 이미지에 표기해주셔야 합니다.\"\n"
  - title: CC 라이선스는 저작권에 반대하는 라이선스이다.
    answer: wrong
    description: CC는 저작권에 반대하는 것이 아닙니다. CCL은 저작권자로 하여금 좀 더 유연하고 열린 방법으로 저작권을 보유하고 관리할 수 있도록 도와줍니다. 사실 CCL은 그 실효성을 저작권법에 의존하고 있습니다.
---


![text.png]({{site.baseurl}}/media/text.png)

&nbsp;

0. TOC
{:toc}
{: .no-style }

## 목차

```
0. TOC (순서없는 목록) - 숫자로 시작
{:toc}

* TOC (순서 목록) - 목록형으로 시작
{:toc}

# 디자인 시안처럼 목록 스타일 없이 직접 제목으로만 목차를 구성하고 싶으면 
아래처럼 `no-style` 클래스를 추가합니다.

* TOC (목록 스타일 없는 목록)
{:toc}
{: .no-style }

```

### 목차에서 제외하기

기본적으로 헤드라인 즉 제목 요소들이 자동으로 목차로 변환되어 출력되지만   
제외하고 싶은 제목 밑에 ```{: .no_toc }```을 추가하면 그 제목은 목차에서 제외됩니다.

```
## 이탤릭 스타일 <em>
{: .no_toc}
```

예시로 위에서 처럼 이탤릭 스타일이라는 제목 아래 구문을 추가해서
원래대로라면 목차에서 두꺼운 스타일 아래 이탤릭 스타일이 나와야 하지만
목차에서 제외된 걸 확인할 수 있습니다.


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
{: .no_toc}

*이탤릭*

```
*이탤릭*
```

## 링크

### 일반 링크

```
['test'](http://www.example.com/)
```
['test'](http://www.example.com/)

### 새창으로 링크

```
['test'](http://www.example.com/){: target="_blank" }
```
['test'](http://www.example.com/){: target="_blank" }

### 새창으로 버튼 링크 

```
['test'](http://www.example.com/){: .btn.btn-default target="_blank" }
```
['test'](http://www.example.com/){: .btn.btn-default target="_blank" }


### 자동 링크

```
autolink: <http://www.example.com/>
```

autolink: <http://www.example.com/>

## 문단 (p)

```
Lorem ipsum dolor sit amet, consectetur
adipisicing elit. Quasi error quod libero

&nbsp;

corporis, iste sit nulla similique enim dignissimos asperiores, illo numquam architecto maxime ab tenetur repellendus, dicta sed officia.
```

    

Lorem ipsum dolor sit amet, consectetur
adipisicing elit. Quasi error quod libero

&nbsp;

corporis, iste sit nulla similique enim dignissimos asperiores, illo numquam architecto maxime ab tenetur repellendus, dicta sed officia.


## 인용 (blockquote)

```
> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem numquam, laboriosam, omnis eligendi ratione voluptas natus! Vitae consectetur molestiae, ab. Nemo rem maxime ea eos facilis ducimus suscipit voluptates obcaecati?
```

> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem numquam, laboriosam, omnis eligendi ratione voluptas natus! Vitae consectetur molestiae, ab. Nemo rem maxime ea eos facilis ducimus suscipit voluptates obcaecati?


## 정렬

### 가운데 .text-center

```
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi error quod libero corporis, iste sit nulla similique enim dignissimos asperiores, illo numquam architecto maxime ab tenetur repellendus, dicta sed officia.
{: .text-center }
```

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi error quod libero corporis, iste sit nulla similique enim dignissimos asperiores, illo numquam architecto maxime ab tenetur repellendus, dicta sed officia.
{: .text-center }

### 왼쪽 .text-left

```
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi error quod libero corporis, iste sit nulla similique enim dignissimos asperiores, illo numquam architecto maxime ab tenetur repellendus, dicta sed officia.
{: .text-left }
```

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi error quod libero corporis, iste sit nulla similique enim dignissimos asperiores, illo numquam architecto maxime ab tenetur repellendus, dicta sed officia.
{: .text-left }

### 오른쪽 .text-right

```
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi error quod libero corporis, iste sit nulla similique enim dignissimos asperiores, illo numquam architecto maxime ab tenetur repellendus, dicta sed officia.
{: .text-right }
```

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi error quod libero corporis, iste sit nulla similique enim dignissimos asperiores, illo numquam architecto maxime ab tenetur repellendus, dicta sed officia.
{: .text-right }

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



## 테이블

```

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell
{: .table}
```
&nbsp;

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell
{: .table}

&nbsp;
&nbsp;

```
|  Left-Aligned |  Center Aligned | Right Aligned |
| :------------ | :-------------: | ------------: |
| col 3 is      | some wordy text |         $1600 |
| col 2 is      |     centered    |           $12 |
| zebra stripes |     are neat    |            $1 |
{: .table}
```
&nbsp;

|  Left-Aligned |  Center Aligned | Right Aligned |
| :------------ | :-------------: | ------------: |
| col 3 is      | some wordy text |         $1600 |
| col 2 is      |     centered    |           $12 |
| zebra stripes |     are neat    |            $1 |
{: .table}

&nbsp;
&nbsp;


## 깃헙 마크다운 도움말 페이지 링크

<https://guides.github.com/features/mastering-markdown/>
