---
templateKey: blog-post
title: "Books: Clean Code, Chapters 13-17"
date: 2018-01-27
tags: 
  - books
  - clean code
published: true
---

### Chapter 13: Concurrency

This is a topic I know nothing about in the practical sense and am slightly afraid of it. I can think pretty well in the synchronous universe but going async bends my brain as I don't have the subject knowledge to comprehend it. Let's learn!

Plenty of pitfalls in concurrency. To write a multithreaded program well, you must have the basics of SOLID and limit the scope of your data accessors. It seems like immutable objects are recommended as well so that you aren't accidentally modifying a shared resource. It also seems that functional programming would make sense; again, goes in line with limiting data access.

Synchronized sections are necessary, but keep them small and isolated.

A lot of this is very practical and therefore not very meaningful to me right now as I have no experience in the concurrent code world right now.

### Chapter 14: Successive Refinement

This is a practical demonstration of refactoring a piece of Java code. Not a lot to explain. Just use TDD.

### Chapter 15: JUnit Framework

Very detailed introduction to JUnit. Being familiar with testing frameworks and focusing on Python, I'm probably going to just skim this.

### Chapter 16: Refactoring `serialDate`

More practical Java refactoring.

1. Wrap with tests
2. Refactor for cleanliness, clarity and concision
3. Profit

### Chapter 17: Smells and Heuristics

Encyclopedia style list of things to watch for when writing code.

I won't summarize as it's already more or less a summary of previous chapters. A good, concise list is [here via CodingHorror](https://blog.codinghorror.com/code-smells/). There are plenty of others.

### Conclusion

Clean Code was a great read, at least up until Chapter 14 where it spent its time hammering home previous lessons. I'd recommend this to anyone who is interested in learning about what makes some pieces of code seem intangibly but obviously better than other code. Being about 2 years into my career now, I have enough experience under my belt to have seen and written all levels of good and bad code. Having that personal experience made the examples much clearer to understand, because you can understand why the "rules" are what they are. You've probably had to fix a problem in a particularly messy series of functions that would've been a cinch if it was properly abstracted and tested in the first place.

Overall, I'd recommend this highly. Its reputation is well deserved.
