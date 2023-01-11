---
title: Project Log
layout: default
menu: /projects.html
class: projects
---


# Projects #

![A few interesting project photos](assets/img/gallery/project-thumbnails.jpg)
{: .thumbnail-gallery :}

This section is a collection of posts I write on selected projects. Some are small but interesting;
others are more significant, spanning multiple years. I've included both work for clients and
work on my own boat, an 
[Allied Seabreeze](http://www.alliedseabreeze35.org/) (hull #62).
I try to include as much detail as possible: photos, product links,
alternate approaches, and lessons learned. 

Hopefully you'll find this information useful.
Feel free to [contact me with questions]({{ site.contact.email }}).

**Jump to:**  
<a href="#recent" class="btn btn-primary btn-sm">Recent work</a>
<a href="#seabreeze" class="btn btn-primary btn-sm">Seabreeze</a>
<a href="#fiberglass" class="btn btn-primary btn-sm">Fiberglass</a>
<a href="#woodworking" class="btn btn-primary btn-sm">Woodworking</a>
{: .center .jump-links :}

## Recent Work ## {#recent}

[Follow me on Instagram]({{ site.contact.insta}}) for more updates.

<div class="post-list">
<ul>
{% for post in site.categories['recent'] %}
  <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> ({{ post.date | date: "%Y/%m/%d" }})</li>
{% endfor %}
</ul>
</div>
{{ site.tags['foobar'][0].title }}

## Projects by Category ##

<div class="post-list">
{% for tag in site.tags %}
<h3 id="{{ tag[0] | replace: " ", "-" | replace: "_", "" | downcase }}">{{ tag[0] | replace: "_", " " }}</h3>
<ul>
{% for post in tag[1] %}
  <li><a href="{{ post.url | relative_url }}">{{ post.tagTitle | default: post.title }}</a> ({{ post.date | date: "%Y/%m/%d"}})</li>
{% endfor %}
</ul>
{% endfor %}
</div>


## Major Projects ##

<div class="post-list">
{% for elem in site.defaults %}
  {% if elem.values.project %}
  <h3>{{ elem.values.project }}{% if elem.values.draft %} <em>(work in progress)</em>{% endif %}</h3>
  <ul>
  {% assign cat = elem.scope.path | split: "/" | last %}
  {% for post in site.categories[cat] reversed %}
    <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
  {% endfor %}
  </ul>
  {% endif %}
{% endfor %}
</div>
