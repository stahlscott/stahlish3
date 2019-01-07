---
templateKey: blog-post
title: "CodeMash 2018 retrospective"
date: 2018-01-13T09:08:11-05:00
draft: false
tags: ["conference", "react"]
---

## What is CodeMash?

[CodeMash](https://www.codemash.org/) is a software developer conference in Sandusky, OH, featuring 4 days of lectures and plenty of opportunities to learn and network.

## Prep work

In planning for 2018, looking at their schedule, debating how to spend my time, I remembered from 2017 that their scheduling app was pretty bad. I decided that this year I would take what I've learned in React over the past year and build something myself.

Having never successfully built and deployed a real app with db and auth before, I was a bit nervous going in. Thankfully, friends had recommended create-react-app and firebase-tools which ended up making my life super simple. create-react-app will give you a ready-to-go React app with all the tooling and basic structure you need, and Firebase makes deployment, db, and auth dead simple. With CodeMash's session API, it was just a matter of putting the pieces together. Thanks to things I've learned over the past year and a half plus several fantastic tutorials on the db and auth bits, I was able to build a mostly finished version in about 24 hours. It was nothing amazing but I built up a lot of self-confidence by completing it.

Of course, about 4 days later, CodeMash released a new and improved app for everyone to build their schedules, leave reviews, map of the event floor, etc, etc. I beat them to market which has to count for something, right?!

## Precompilers: Tues/Weds

I went for the extended CodeMash experience, which includes 2 days of "precompiler" 4-hour sessions in addition to the regular 2 days of 1-hour sessions. I always recommend doing so, especially if your company is sponsoring your attendance (thanks [OnShift](https://www.onshift.com/about/careers)!). The 4-hour sessions allow you to go significantly more in-depth on a topic, often with hands-on work which can be more useful to people who learn by doing instead of just listening.

My two favorite precompilers:

* [Getting Real Without Getting Fired](https://www.codemash.org/sessions/?id=7354) ([Allison Pollard](https://twitter.com/allison_pollard), [Marcus King](https://twitter.com/marcusking2002))

    Session focused on how trust & empathy are crucial to a functional work environment, and those enable us to be open and honest with our coworkers without hurting feelings. I would like to read more about how to rebuild trust within teams once it's been lost.

* [Building Serverless Applications in AWS Workshop](https://www.codemash.org/sessions/?id=7021) ([Jarred Olson](https://twitter.com/JarredOlson), [Christopher Judd](https://twitter.com/javajudd))

    As a newbie to AWS, this was helpful as we got to roam around and use several functions from Amazon's intimidatingly long list. Got acquainted with Lambda functions, S3 storage and more.

Our group from OnShift also bonded over several games of [Five Minute Dungeon](https://boardgamegeek.com/boardgame/207830/5-minute-dungeon) and I got the chance to introduce [The Room](https://www.youtube.com/watch?v=yIDa8sIWeW0) to all of my coworkers.

## The main event: Thurs/Fri

The 1-hour sessions were great this year. My highlights:

* [Unbreakable. Perfect: The Craft of Code](https://www.codemash.org/sessions/?id=7223) ([Joe Morgan](https://twitter.com/joesmorgan))

    I love hearing talks about code craftsmanship and about the journey of developers from apprentice to master. Personal takeaways as I continue my journeyman's path: don't stop when it works, take a breath and refactor to make sure it's well built; if the tests are hard to write, that's a warning that the code should be refactored; simple is always better.

* [Super Mario UX Designer](https://www.codemash.org/sessions/?id=7561) ([Brad Colbow](https://twitter.com/bradcolbow))

    Fascinating look at how Super Mario Bros succeeds at teaching you its UX naturally, without being explicit or losing its players in overcomplexity. We then compared that to good & bad UX examples to see how we can introduce users to our app's UX experience more naturally and happily.

* [Refactoring a Legacy Application with ReactJS](https://www.codemash.org/sessions/?id=7294) ([Ali Orlando](https://twitter.com/fed_goose))

    This featured one of our own OnShifters who talked about our experience inserting React into our legacy codebase. It was genuinely funny, a rarity sometimes, & provided a good overview as to the decisions and challenges she faced leading the implementation of this new technology into our old monolith and presented a good case _against_ following in our footsteps unless your scenario matched ours. Not every refactor project is worth doing!

* [Writing Scalable JavaScript at Cox](https://www.codemash.org/sessions/?id=6895) ([Cory House](https://twitter.com/housecor))

    This one inspired a lot of jealousy; I wish we had developers to spare that we could create a team that just focuses on creating tools for our other internal teams to use. The biggest highlight for me was seeing how they built a documentation tool that created documentation from their existing components, without requiring real manual documentation that relies on developers caring enough to keep everything up-to-date.

* [Lessons in Ethical Development I Learned From Star Wars](https://www.codemash.org/sessions?id=7218) ([Jameson Hampton](https://twitter.com/jameybash))

    What should you do if you've been at your job for a few years and suddenly find yourself building the Death Star? This was a great talk that went over setting ethical guidelines for yourself _before_ you reach a point where you might cross them. Put a line in the sand, like, "I will not build anything that kills people", or, "I will not build a Muslim registry". It's usually never that clear cut, so having guidelines allows you to stop your slide down a slipper slope of unethical work. Don't be happy just following orders!

## The goodbye

Between these talks, spending quality time with coworkers/former coworkers/new friends, and an unreasonable amount of alcohol consumption in the off-hours, it was another successful CodeMash. The final boss was stumbling our sleep-deprived selves home in during an ice storm. A nice reminder about how lucky we are to live in the Great Lakes region. See you next year, CodeMash!
