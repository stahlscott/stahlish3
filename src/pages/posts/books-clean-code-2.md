---
templateKey: blog-post
title: 'Books: Clean Code, Chapters 5-8'
date: 2018-01-15
tags:
  - books
  - clean code
published: true
---

### Chapter 5: Formatting

> Communicating is the professional developer's first order of business.

Profile of a product that is approximately 50k lines, comprised entirely of <200-500 line files.

Details should go from high-level at the top of the file to most detailed at the bottom of the file. Think of it like a newspaper article, with highlights and overview at the start and details at the end. But related concepts should be grouped in a class.

Whitespace & indentation are incredibly useful but should also be used in moderation. Paragraphs are easier than chapters. I've personally been burned by deploying a function that was perfect in every way except for a single missed indentation, which brought our customers down for a day. Probably would have been caught if I had broken the function up into smaller pieces.

### Chapter 6: Objects & Data Structures

Express data in abstract terms.

> Objects hide their data behind abstractions and expose functions that operate on that data. Data structures expose their data and have no meaningful functions.

OO & procedural/functional code are 'virtual opposites' in terms of what they do well vs poorly.

Avoid making hybrid objects/data structures. This seems like a point in favor of n-tier (service, dao, dto/data model). Keep your data models clean and drop all the complex methods into services.

### Chapter 7: Error Handling

Provide context with your exceptions, so as to help the debugger figure out what's happening as quickly as possible.

Best to wrap your API (seeing a pattern here?) and return a common exception covering individual exceptions.

Special Case Objects can be used to encapsulate special case behavior (object doesn't exist or doesn't fit criteria => return a special case object)

This is huge for us:

> If you are tempted to return null/None from a method, consider throwing an exception or returning a Special Case Object instead.

We return None all the time and frequently do if checks to see if it exists. We should do this far less often per these principles.

### Chapter 8: Boundaries

The discussion here is around integrating third-party software. You might be surprised to learn that they recommend wrapping it in a layer of abstraction.

Good idea to start any implmentation with a set of "learning tests" across your usage scope to ensure the software does what you want, which can be turned into unit tests to be used during package upgrading.

Ok, so it's not just third-party software anymore, now we're talking about any piece of code that needs to be integrated where your understanding of it is on the other side of some impenetrable boundary. They reference a subsystem that has yet to be completely developed by an internal team. The solution to allow them to continue development was to define their own interface then implement an adapter to translate the subsystem API to their own, encapsulating the interaction.

> Good software designs accommodate change without huge investments and rework. When we see code that is out of our control, special care must be taken to protect our investment and make sure future change is not too costly.
