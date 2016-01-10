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
    "excerpt": {{ page.content | strip_html | strip_newlines | truncatewords: 20 | jsonify }}
},{% endif %}{% endfor %}{% for faq in site.faqs %}{
    "title": {{faq.title | jsonify}},
    "link": {{ faq.url | jsonify }},
    "excerpt": {{ faq.content | strip_html | strip_newlines | truncatewords: 20 | jsonify }}
},{% endfor %}{% for resource in site.resources %}{
    "title": {{resource.title | jsonify}},
    "link": {{ resource.url | jsonify }},
    "excerpt": {{ resource.content | strip_html | strip_newlines | truncatewords: 20 | jsonify }}
},{% endfor %}{% for showcase in site.showcases %}{
    "title": {{showcase.title | jsonify}},
    "link": {{ showcase.url | jsonify }},
    "excerpt": {{ showcase.content | strip_html | strip_newlines | truncatewords: 20 | jsonify }}
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
        console.log('keyup!');
        var resultdiv = $('#search-results');
        // Get query
        var query = $(this).val();
        // Search for it
        var result = index.search(query);
        // Show results
        $('#content').hide();
        resultdiv.empty();
        // Add status
        resultdiv.append('<div class="result-header"><p class="text-center">' + result.length + ' 개를 찾았습니다.</p></div>');
        // Loop through, match, and add results
        for (var item in result) {
          var ref = result[item].ref;
          var searchitem = '<div class="result"><div class="result-body"><a target="_blank" href="'+store[ref].link+'" class="post-title">'+store[ref].title+'</a><p>'+store[ref].excerpt+'</p></div>';
          resultdiv.append(searchitem);
        }
  });
});
