---
templateKey: blog-post
title: 'Books: Clean Code, Chapters 1-4'
date: 2018-01-14
tags:
  - books
  - clean-code
published: true
---

## Clean Code

After borrowing [Doug Morgan](https://www.twitter.com/dougmorganCLE)'s copy of Clean Code for approximately 8 months, I figured today was a good day to seriously crack it open and read it. In the process of reading it, I will be taking some notes and making highlights. I figured here is as good a place as any to keep those.

---

### Chapter 1: Clean Code

> "[Managers] may defend the schedule and requirements with passion; but that's their job. It's _your_ job to defend the code with equal passion."

Of course, this is not to say that we can take 6 months to write each story. Startups and agile teams must move quickly, but it's important not to create long-term problems in the name of short-term gains.

Essentials of clean code according to interviewed developers: Reduced duplication, expressive/crisp naming, small/early abstractions, readability (!!), thoroughly tested, elegant.

---

### Chapter 2: Naming

> Programmers create problems for themselves when they write code solely to satisfy a compiler or interpreter.

I will be honest, a lot of times lately I have gotten into a bad habit of writing code that works, writing a few tests around it to please the code reviewers, and calling it a day. Sometimes this code even works! But I plan to improve my habits and take to heart the mantra of `red / green / refactor`.

As to naming, it's important to be clear to the reader what your intention is. Each module, each method is a short story. Would you name your two lead characters Steve and Steve_2? (don't @ me with your clever comments about when you would do this)

> In general programmers are pretty smart people. Smart people sometimes like to show off their smarts by demonstrating their mental juggling abilities. After all, if you can reliably remember that `r` is the lower-cased version of the url with the host and scheme removed, then you must clearly be very smart.

Don't be smart when you can be clear. This goes for writing cute, complex list comprehensions in python as well just to show that it can be done, another bad habit of mine.

> Our goal, as authors, is to make our code as easy as possible to understand. We want our code to be a quick skim, not an intense study.

---

### Chapter 3: Functions

> The first rule of functions is that they should be small. The second rule of functions is that _they should be smaller than that_.

- Blocks within `if` statements should be one line
- Ideally a function call
- Functions should have no more than 1 or 2 indent levels

Switch statements are inherently dirty for several reasons but sometimes unavoidable, so it's best to bury them in the basement of an abstract factory.

> Passing a boolean into a function is a truly terrible practice.

... guilty

> We should never ignore any part of the code. The parts we ignore are where the bugs will hide.

Meaning: don't write code in such a way that causes the reader's eyes to gloss over important information. Specifically this means complicated functions with numerous parameters. I will admit, minimizing parameter inputs has not been high on my personal code quality warning list. I will make it a higher priority.

> Have no side effects. Side effects are lies.

This book is certainly kinder to OOP than modern trends are. Are we smarter now or is this just backlash to OO's popularity 10 years ago?

> Functions should either do something or answer something, but not both.

Again, guilty. Guess I need to refactor `try_to_change_thing_then_return_success_or_failure_bool()`

If your function name is well written and it has an "and" in the name: refactor.

> Prefer exceptions to returning error codes. Extract try/catch blocks.

Proper way to write good functions? Code never starts clean, but it becomes clean through good tests, working code, and focused editing. Say it with me: `red / green / refactor`

---

### Chapter 4: Comments

> The proper use of comments is to compensate for our failure to express ourself in code. Comments are always failures.

A good point here: comments are lies, because comments are manually written without real connection to the code except at the exact time of their writing. Over time, comments "become orphaned blurbs of ever-decreasing accuracy". The best documentation is well written code.

Most valid comments are "whys" not "hows" or "whats."

> Bad comments are crutches or excuses for poor code or justifications for insufficient decisions, amounting to little more than the programmer talking to himself.

THIS:

> It is just plain silly to have a rule that says every function must have a javadoc, or every variable must have a comment.

We've only started being more rigorous about this at OnShift, but frequently there are completely unnecessary docstrings that just take up space. And most of the currently necessary ones would be unnecessary if the functions, variable names, and data structures were cleaner code!

Bad comments are noise that quickly get ignored.

Commented code is bad. If it's unwanted or not working, just delete it. Otherwise it will quickly become noise that's as osbcure and irrelevant as any other bad comment.

My takeaway: if you think you need a comment, you probably just need clearer code or stronger willpower.
