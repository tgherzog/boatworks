---
title: Contents
---

# Boatworks: A Project Log #
{: .site-title :}

This is a project journal for my [Allied Seabreeze](http://www.alliedseabreeze35.org/);
essentially, a place to park and share my project notes and photos so I remember what I did.

![Cloud 9 in Profile](assets/img/cloud-nine-profile.jpg)
{: .banner-image :}


### Projects ###

<ul class="toc">
{% for elem in site.defaults %}
  {% if elem.values.project %}
  <li>{{ elem.values.project }}{% if elem.values.draft %} <em>(work in progress)</em>{% endif %}<ul>
  {% assign cat = elem.scope.path | split: "/" | last %}
  {% for post in site.categories[cat] reversed %}
    <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
  {% endfor %}
  </ul></li>
  {% endif %}
{% endfor %}
</ul>
