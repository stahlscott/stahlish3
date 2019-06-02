---
templateKey: blog-post
title: 'First Open Source Contribution!'
date: 2018-03-10
tags:
  - project
  - open-source
  - python
  - sqlobject
published: true
---

We had a weird problem come up at work. We stream customer data from our main product to our new product in order to keep the data separate but consistent. It seems as though the process by which we were streaming that data was sometimes sending bad objects and was doing so repeatedly. As we dug into it, it seems that we were triggering the data to be shipped on created/updated/destroyed row hooks inside transaction blocks in the ORM, but in some cases we were rolling back those transaction blocks even though the data had been shipped.

It was decided that to fix the issue without rewriting everything, we would add a signal on commit and on rollback. We would then buffer the incoming data being sent from the update/delete blocks and only release the info once we received a commit signal with matching models and object ids. We use [SQLObject](https://github.com/sqlobject/sqlobject), which is a slightly obscure Python ORM, and we forked it approximately 5 years and 2 major versions ago. I started by looking at the current version of the project, which is still being maintained, to see if they had already implemented what we were looking for. On the contrary, I found that the commit & rollback methods had remained exactly the same since 2004. It ended up being a relatively straightforward fix once the problem was understood, so I made the change, wrote a test to cover it, and pushed it to our local fork. Once we implemented the buffer service in our main codebase, everything seemed to be working well.

(p.s. docker-compose made it easy to redirect a dependency to a local folder, which was invaluable at figuring out how to make this work)

At that point, knowing that this was a useful change for our org, I thought I'd go a step further and see if I could open a pull request into the main SQLObject project with these changes in case someone else could make use of it. So, on a late Friday night after seeing Neil Gaiman give a talk downtown, I forked it, added my changes, ran the tests, and opened a PR with a brief version of the above story. I figured there might be some back and forth, a bit of discussions as to pros and cons, etc. I guess I didn't really know what to expect since I'd never made a contribution to an open source project before. But, less than 12 hours later, the maintainer had just pulled it in and updated the authors list to include my name. Turns out that contributing to open source can be pretty simple after all.

Here's to you, SQLObject v3.7.0. A year ago, I would've been afraid to even try to edit our org's fork. Now I'm haphazardly opening PRs into the main project, editing blocks of code that haven't been touched in 15 years. I hope someone else benefits from the work, and above all I truly hope I didn't accidentally make anything worse ¯\\\__(ツ) _/¯
