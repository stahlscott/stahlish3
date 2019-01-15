---
templateKey: blog-post
title: "Books: Clean Code, Chapters 9-12"
date: 2018-01-21
tags: 
  - books
  - clean code
published: true
---

### Chapter 9: Unit Tests

The essentials of TDD:

> **First Law:** You may not write production code until you have written a failing unit test.

> **Second Law:** You may not write more of a unit test than is sufficient to fail, and not compiling is failing.

> **Third Law:** You may not write more production code than is sufficient to pass the currently failing test.

The problem is that a massive amount of unit testing can be just as bad as no testing if the tests themselves are not written cleanly, and we tend to look at test code as good if it passes regardless of its structure. The tests will change as we write more code, so you're creating more tech debt by writing dirty test code.

> Test code is just as important as production code.

I agree with this:

> Readability is perhaps even more important in unit tests than it is in production code.

Very important to follow an explicit, clean, readable pattern, without any shortcuts. Following Arrange/Act/Assert (or Build/Operate/Check, both of which are implementations of Given/When/Then) pattern:
1. Arrange: stage data & set expected result variables
2. Act: execute the production code we're testing
3. Assert: run your assertions (Hamcrest++) against your expectations

This should make any test code I write simple for the reader to understand and modify to their needs. If the arrange step is repeated across methods, extract that to a helper. Easy and clear.

They proceed to show code I would describe as "fine" and refactor it with explicit, expressive helper methods to make it even clearer. I will consider doing this in the future.

> Test a single concept in each test function.

They recommend this over "one assert per function" which I agree with. Sometimes it makes more sense, to me, to have several asserts to test all angles of the same concept. One assert per function is overkill.

Summary concept: **F.I.R.S.T**

* **Fast** Tests should run quickly. This translates to following the test pyramid framework of a large number of unit tests, smaller number of integration, even smaller number of acceptance.
* **Independent** Test should not depend on each other; they should be able to run in any random order and pass.
* **Repeatable** Tests should be able to run in any environment with the same results.
* **Self-Validating** Tests should either pass or fail, not output to a log and require manual checking.
* **Timely** The tests should be written just before the production code that makes them pass

> If you let your tests rot, then your code will rot too.

### Chapter 10: Classes

Classes should be small, measured not by number of lines but number of responsibilities. Five methods may seem small but not if it spans a wide area of concern.

> If we cannot derive a concise name for a class, then it's likely too large. The more ambiguous the class name, the more likely it has too many responsibilities.

> We should also be able to write a brief description of the class in about 25 words without using the words if / and / or / but.

Boils down to Single Responsibility Principle.

> Getting software to work and making software clean are two very different activites.

We need to get away from the idea that clean code even *can* be written from the start. We will meander around and come up with six different ways of solving the problem first. Once it works, then we find a way to make it pretty. Writing a book is a different skill than editing/proofreading one.

Eliminate ever changing parameter lists by promoting variables to class level; if several methods share the same variables that are never used by other methods, good sign you have a class that can be extracted.

This is especially true in Python as convention allows several classes per module. Why not make use of the increased flexibility?

> We want to structure our systems so that we muck with them as little as possible when we update them with new or changed features.

### Chapter 11: Systems

Programs are like cities: they start small and build up as the population increases and services are needed. You wouldn't have a metropolitan infrastructure for a small town, and a metropolis can't survive without many essential services like mass transit. So they are constructed as needs arise.

> It is a myth that we can get systems "right the first time." Instead, we should implement only today's stories, then refactor and expand the system to implement new stories tomorrow.

Agile! Likewise, systems can grow easily if separation of concerns is proper.

Side note: A lot of this chapter is specific to Java, poorly written/explained or just relatively boring.

### Chapter 12: Emergence

Kent Beck's rules of simple design: (in order of importance)

1. Runs all the tests
2. Contains no duplication
3. Expresses the intent of the programmer
4. Minimizes the number of classes and methods

First do step 1, then steps 2-4 until satisfied.

Side note: I'd love to see more examples comprised of real world objects/concepts instead of abstract math stuff.

*EXPRESSIVE* is going to be my keyword for 2018. Make the code obvious, easy to read. Like a YA novel.

> Well-written unit tests are expressive. A primary goal of tests is to document by example.

> All too often we get our code working and then move on to the next problem without giving sufficient thought to making that code easy for the next person to read.

Finally, even though abstraction can be beautiful, it shouldn't be everywhere. 2 line functions are nice but 20 line functions can work well too. Don't abstract yourself into 10 unnecessary additional classes and functions.
