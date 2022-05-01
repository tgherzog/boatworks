---
title: Project Log
layout: default
menu: /projects.html
class: projects
---


# Project Log #

This project log is a collection of documentation, notes, photos, resource links and assorted
other bits of information and back-story which I revise frequently and share with
fellow DIY owners.
Most projects involve my personal boat, an
[Allied Seabreeze](http://www.alliedseabreeze35.org/).
Hopefully folks will find this useful.
Feel free to [contact me with questions]({{ site.contact.email }}).

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
