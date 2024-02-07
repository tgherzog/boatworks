This is a journal for my sailboat projects

## Site Authoring ##

All posts are organized using the Jekyll site generator and make use
of the "category" and "tags" features. All posts are either in 
a subdirectory under "projects" (for large, multi-page writeups) or
under "recent" (originally for short, "recent work" but now for any
single-page writeup).

/projects.html provides a dynamically-generated list of all posts:

* "Recent Work" is listed first. Headers must include:
  * tags: recent (along with any other tags)
  * listDate: YYYY-MM-DD (should match the post unless
    another is preferred, e.g. for multi-page posts you might
    include the final date not the first)
  * listTitle: title (for listing - optional)

* "Projects by Category" come next, defined as per Jekyll tags
  (excluding "recent"). Headers must include:
  * at least one tag
  * listDate
  * listTitle (optional)

* "Major Projects" come last, as defined by Jekyll categories.
  However, the category title and order are actually defined
  in `_config.yml`. This section does display or sort on listTitle
  or listDate

Posts must include at least one tag or be part of a category
or they won't be listed on /projects.html.
