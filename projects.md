---
title: Project Log
layout: default
menu: /projects.html
class: projects
---


# Projects #

![A few interesting project photos](assets/img/gallery/project-thumbnails.jpg)
{: .thumbnail-gallery :}

This section is a collection of posts I write on select projects. Some are
relatively small, completed over a days or a couple of weeks; others are multi-year
renovations. It includes both work for clients and work on my own boat, an 
[Allied Seabreeze](http://www.alliedseabreeze35.org/) (hull #62).
I try to include as much detail as possible: photos, product links,
alternate approaches, and lessons learned.

I also post on [Facebook]({{ site.contact.fbook }}) and [Instagram]({{ site.contact.insta }})
and tend to post there more frequently. Follow those pages for the most
recent updates.

I hope you find this information useful.
Feel free to [contact me with questions]({{ site.contact.email }}).

**Jump to:**  
<a href="#recent" class="btn btn-primary btn-sm">Recent work</a>
<a href="#seabreeze" class="btn btn-primary btn-sm">Seabreeze</a>
<a href="#fiberglass" class="btn btn-primary btn-sm">Fiberglass</a>
<a href="#woodworking" class="btn btn-primary btn-sm">Woodworking</a>
<a href="#canvas" class="btn btn-primary btn-sm">Canvas</a>
{: .center .jump-links :}

## Recent Work ## {#recent}

For my most recent posts, check out
[Facebook]({{ site.contact.fbook }}) or [Instagram]({{ site.contact.insta }}).

<div class="post-list">
<ul>
{% assign recent_posts = site.tags.recent | sort: "listDate" | reverse %}
{% for post in recent_posts %}
  <li><a href="{{ post.url | relative_url }}">{{ post.listTitle | default: post.title }}</a> ({{ post.listDate | date: "%b, %Y" }})</li>
{% endfor %}
</ul>
</div>

## Projects by Category ##

<div class="post-list">
{% for tag in site.tags %}
{% if tag[0] != 'recent' %}
<h3 id="{{ tag[0] | replace: " ", "-" | replace: "_", "" | downcase }}">{{ tag[0] | replace: "_", " " }}</h3>
<ul>
{% for post in tag[1] %}
  <li><a href="{{ post.url | relative_url }}">{{ post.listTitle | default: post.title }}</a> ({{ post.date | date: "%b, %Y"}})</li>
{% endfor %}
</ul>
{% endif %}
{% endfor %}
</div>


## Major Projects ##

<div class="post-list">
{% for elem in site.defaults %}
  {% if elem.values.project %}
  <h3 id="{{ elem.values.key }}">{{ elem.values.project }}{% if elem.values.draft %} <em>(work in progress)</em>{% endif %}</h3>
  <ul>
  {% assign cat = elem.scope.path | split: "/" | last %}
  {% for post in site.categories[cat] reversed %}
    <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
  {% endfor %}
  </ul>
  {% endif %}
{% endfor %}
</div>
