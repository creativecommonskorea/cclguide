---
layout: default
permalink: /about/resources/
description: 
published: true
title: 06. 쉽게 이해하는 CC 라이선스
quiz_show: false
related_contents_show: true
related_contents: |
  * [이용허락조건과 CC 라이선스 종류](/about/terms/)
  * [적용 사례](/about/showcases/)
---

{% assign categories = site.data.resources-categories %}

<header class="page-header">
    <h1 class="page-title">{{ page.title }}</h1>
    {% include breadcrumb.html %}
</header><!-- .page-header -->

<div class="page-content">
    <ul class="tabs hidden-xs">
        <li class="on"><a href="/about/resources/">전체</a></li>
        {% for hash in site.data.resources-categories %}
            {% for category in hash %}
                <li><a href="/about/resources/{{ category[0] }}/">{{ category[1] }}</a></li>
            {% endfor %}
        {% endfor %}
    </ul>

    <div class="selectbox visible-xs">
        <div class="label">전체</div>
        <select class="js-select">
            <option value="/about/resources/">전체</option><!-- value : url -->
            {% for hash in site.data.resources-categories %}
            {% for category in hash %}
            <option value="{{ category[0] }}">{{ category[1] }}</option>
            {% endfor %}
        {% endfor %}
        </select>
    </div>

    <ul class="archive-list">
        {% for resource in site.resources limit: site.paging_list_resources %}
            {% for hashes in categories %}
                {% for hash in hashes %}
                    {% if hash[0] == resource.category %}
                        {% assign category_label = hash[1] %}
                    {% endif %}
                {% endfor %}
            {% endfor %}
        <li>
            <div class="post-meta">
            {% if resource.category %}
                <a class="taxo" href="/about/resources/{{ resource.category }}">{{ category_label }}</a>
            {% endif %}
            </div>
            <h2 class="post-title">
                <a href="{{ resource.link }}" target="_blank" title="{{ resource.title | strip_html | strip_newlines }} 자세히 보기">{{ resource.title }}</a>
            </h2>
            <div class="post-thumbnail">
                <a href="{{ resource.link }}" target="_blank" title="{{ resource.title }} 자세히 보기">
                    <img src="{{ resource.image }}" alt="">
                </a>
            </div>
            <a href="{{ resource.link }}" target="_blank" title="{{ resource.title | strip_html | strip_newlines }}">
                <div class="post-excerpt" style="min-height: 100px;">
                    {{ resource.content | strip_html | strip_newlines | truncate: 300 }}
                </div>
            </a>
        </li>
        {% endfor %}
        <li><a href="/paging/resources/2/" class="sr-only jscroll-next">2</a></li>
    </ul>

</div>

<div class="page-additional{% if page.quiz_show == false and page.related_contents_show == false %} hide{% endif %}">
        {% if page.quiz_show %}
        <div class="oxquiz">
            <h1>OX 퀴즈</h1>
            <ul class="list-oxquiz">
                <li class="odd">
                    <h2 class="q">
                        <span class="num">1.</span>
                        {{ page.quiz_o_title | newline_to_br }}
                    </h2>
                    <div class="a-img"><img src="/images/view/ox-ico-right.png" srcset="/images/view/ox-ico-right@2x.png 2x"></div>
                    <div class="a">
                        {{ page.quiz_o_desc | newline_to_br }}
                    </div>
                </li>

                <li class="even">
                    <h2 class="q">
                        <span class="num">2.</span>
                        {{ page.quiz_x_title | newline_to_br }}
                    </h2>
                    <div class="a-img"><img src="/images/view/ox-ico-wrong.png" srcset="/images/view/ox-ico-wrong@2x.png 2x"></div>
                    <div class="a">
                        {{ page.quiz_x_desc | newline_to_br}}
                    </div>
                </li>

            </ul>
        </div>
        {% endif %}

        {% if page.related_contents_show and page.related_contents.size > 1 %}
        <div class="related">
            <h1>관련 컨텐츠</h1>
            <ul class="list-related">
            {{ page.related_contents | markdownify }}
            </ul>
        </div>
        {% endif %}
    </div>

<script src="//cdn.jsdelivr.net/jquery.jscroll/2.2.4/jquery.jscroll.min.js"></script>
<script>
    function neueFade() {
        $(this).hide().fadeIn(2000);
    };
    $('.page-content').jscroll({
        loadingHtml: '<div class="text-center"><p><img src="/images/loader.gif" alt="" style="width: 40px;"></p></div>',
        padding: 0,
        nextSelector: 'a.jscroll-next:last',
        contentSelector: 'ul.archive-list',
        debug: true,
        autoTrigger: true,
        callback: neueFade
    });
</script>
