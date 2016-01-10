---
layout: default
permalink: /about/resources/
description: null
front: false
published: true
title: 06. 쉽게 이해하는 CC 라이선스
---

<header class="page-header">
    <h1 class="page-title">{{ page.title }}</h1>
    {% include breadcrumb.html %}
</header><!-- .page-header -->

<div class="page-content">
    <ul class="tabs hidden-xs">
        <li class="on"><a href="">전체</a></li>
        <li><a href="">학술</a></li>
        <li><a href="">음악</a></li>
        <li><a href="">예술</a></li>
        <li><a href="">디자인</a></li>
        <li><a href="">교육</a></li>
    </ul>
    
    <div class="selectbox visible-xs">
        <div class="label">전체</div>
        <select class="js-select">
            <option value="">전체</option>
            <option value="">학술</option>
            <option value="">음악</option>
            <option value="">예술</option>
            <option value="">디자인</option>
            <option value="">교육</option>
        </select>
    </div>

    <ul class="archive-list">
        {% for resource in site.resources %}
        <li>
            <div class="post-meta">
                <a class="taxo" href="#">음악</a>, <a href="#">유럽</a>
            </div>
            <h2 class="post-title">
                <a href="{{ resource.url }}" target="_blank" title="{{ resource.title | strip_html | strip_newlines }} 자세히 보기">{{ resource.title }}</a>
            </h2>
            <div class="post-thumbnail">
                <a href="{{ resource.url }}" target="_blank" title="{{ resource.title }} 자세히 보기">
                    <img src="{{ resource.image }}" alt="">
                </a>
            </div>
            <a href="{{ resource.url }}" target="_blank" title="{{ resource.title | strip_html | strip_newlines }}">
                <div class="post-excerpt">
                    {{ showcase.content | strip_html | strip_newlines | truncate: 300 }}
                </div>
            </a>
            <div class="post-source">
                <a href="#">Bloter</a>
            </div>
        </li>
        {% endfor %}
    </ul>

    <div class="load-more done">모든 항목을 표시하였습니다</div>

</div>
