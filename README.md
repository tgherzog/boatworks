This is a journal for my sailboat projects

## Site Authoring ##

All posts are organized using the Jekyll site generator and make use
of the "category" and "tags" features. All posts are either in 
a subdirectory under "projects" (for large, multi-page writeups) or
under "recent" (originally for short, "recent work" but now for any
single-page writeup).

/projects.html provides a dynamically-generated list of all posts:

* "Recent Work" is listed first. The headers for these posts must
  include:
  * tags: recent (along with any other tags)
  * listDate: YYYY-MM-DD (timestamp; should match the post unless
    another is preferred, e.g. for multi-page posts you might
    include the final date not the first
  * listTitle: title (for listing - optional)

* "Projects by Category" come next, defined as per Jekyll tags
  (excluding "recent")
  In the post header you can include
  listTitle as an alternate to the post title, often
  helpful for the first post in a series.

* "Major Projects" come last, as defined by Jekyll categories.
  However, the category title and order are actually defined
  in `_config.yml`.

Posts must include at least one tag or be part of a category
or they won't be listed on /projects.html.
