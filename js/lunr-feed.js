---

---
// builds lunr
var index = lunr(function () {
    this.field('title')
    this.field('content', {boost: 10})
    this.ref('id')
});

{% assign count = 0 %}{% for page in site.pages %}{% if page.title and page.url != '/404.html' and page.url != '/syntax/' and page.url != '/application/' and page.url != '/reuse/'%}
index.add({
    title: {{page.title | jsonify}},
    content: {{page.content | strip_html | strip_newlines | remove: '   ' | jsonify}},
    id: {{count}}
});{% assign count = count | plus: 1 %}{% endif %}{% endfor %}
{% for faq in site.faqs %}
index.add({
    title: {{faq.title | jsonify}},
    content: {{faq.content | strip_html | strip_newlines | remove: '   ' | jsonify}},
    id: {{count}}
});{% assign count = count | plus: 1 %}{% endfor %}
{% for resource in site.resources %}
index.add({
    title: {{resource.title | jsonify}},
    content: {{resource.content | strip_html | strip_newlines | remove: '   ' | jsonify}},
    id: {{count}}
});{% assign count = count | plus: 1 %}{% endfor %}
{% for showcase in site.showcases %}
index.add({
    title: {{showcase.title | jsonify}},
    content: {{showcase.content | strip_html | strip_newlines | remove: '   ' | jsonify}},
    id: {{count}}
});{% assign count = count | plus: 1 %}{% endfor %}

// builds reference data
var store = [
{% for page in site.pages %}{% if page.title and page.url != '/404.html' and page.url != '/syntax/' and page.url != '/application/' and page.url != '/reuse/' %}{
    "title": {{page.title | jsonify}},
    "link": {{ page.url | jsonify }},
    "excerpt": {{ page.content | strip_html | strip_newlines | truncatewords: 50 | jsonify }}
},{% endif %}{% endfor %}{% for faq in site.faqs %}{
    "title": {{faq.title | jsonify}},
    "link": {{ faq.url | jsonify }},
    "excerpt": {{ faq.content | strip_html | strip_newlines | truncatewords: 50 | jsonify }}
},{% endfor %}{% for resource in site.resources %}{
    "title": {{resource.title | jsonify}},
    "link": {{ resource.url | jsonify }},
    "excerpt": {{ resource.content | strip_html | strip_newlines | truncatewords: 50 | jsonify }}
},{% endfor %}{% for showcase in site.showcases %}{
    "title": {{showcase.title | jsonify}},
    "link": {{ showcase.url | jsonify }},
    "excerpt": {{ showcase.content | strip_html | strip_newlines | truncatewords: 50 | jsonify }}
}{% unless forloop.last %},{% endunless %}{% endfor %}]
// builds search

$(function() {

    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
            $('#search-results').hide();
            $('#content').show();
        }
    });

    $('input#search').on('keyup', function () {

        var resultdiv = $('#search-results');
        // Get query
        var query = $(this).val();
        // Search for it
        var result = index.search(query);

        $('body').toggleClass('searching');
        // Show results
        $('#content').hide();
        resultdiv.empty();
        // Add status
        resultdiv.append('<header class="page-header"><h1 class="page-title">검색 결과</h1></header>');
        resultdiv.append('<div class="page-content"></div>');
        if (result.length != 0) {
            $('.page-content').append('<h2 class="search-title"><strong>\'' + query + '\'</strong> 관련 검색결과 총 ' + result.length + '건</h2><ul class="tabs hidden-xs"><li class="on"><a href="">제목, 내용</a></li><li><a href="">제목</a></li><li><a href="">내용</a></li></ul><div class="selectbox visible-xs"><div class="label">제목, 내용</div><select class="js-select"><option value="">제목</option><option value="">내용</option></select></div>');
            $('.page-content').append('<ul class="search-list"></ul>');
        }
        else {
            $('.page-content').append('<h2 class="search-title"><strong>\'' + query + '\'</strong> 관련 검색된 글이 없습니다.</h2>');
        }

        // Loop through, match, and add results
        for (var item in result) {
          var ref = result[item].ref;
          var searchitem = '<li><h2 class="post-title"><a target="_blank" href="'+store[ref].link+'" class="post-title">'+store[ref].title+'</a></h2><a target="_blank" href="'+store[ref].link+'"><div class="post-excerpt">' + store[ref].excerpt + '</div></a></li>';
          $('.search-list').append(searchitem);
        }
  });
});
