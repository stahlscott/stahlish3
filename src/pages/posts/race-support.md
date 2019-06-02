---
templateKey: blog-post
title: 'Building a cycling race management app from scratch'
description: 'A full-stack CRUD app in a weekend'
date: 2019-06-02
tags:
  - react
  - project
  - python
published: true
---

For a while in the early 2010s, I worked part-time at [Full Moon Vista](https://fullmoonvista.com/), a bike shop in Rochester. FMV produces & hosts several cycling races throughout the year, which involves a lot of coordination and orchestration to get everything right. They do a really good job, too. After I moved to Cleveland and got a job in software development, I came back and started seeing some ways things could be automated. One thing someone told me once: "if you see someone doing something in a spreadsheet, that's a prime candidate to turn into an app." Sure enough, most of their day-of registration was being handled on a big spreadsheet, with entries being added, people being checked-in, and start lists (names and numbers of riders in a current race) being manually copy/pasted into different parts of the spreadsheet and printed off for the necessary parties. It was a painful, if functional, process.

Around 2017, I promised that I would make them an app that would simplify and standardize this process. Unfortunately I wasn't able to actually back up that promise, as, like most junior developers, I had never actually written a full app from scratch and had no idea where to begin. I started and stopped it several times over the past few years, making approximately zero headway in the meantime.

In 2019, with a year's worth of greenfield consulting expertise at [Skiplist](https://www.skiplist.com) under my belt and a renewed promise to my old friends and coworkers, I decided to take a real swing at it. Below, I'm going to document the decisions I made and why, so if another junior-me finds themselves out in the wild wondering how to do something like this, they have a roadmap to follow. I don't claim this is the best or only route, but here's what worked for me and how I solved the problems I had.

The basic gist: pick frameworks you're familiar with, find tools that give you a starter app structure, and keep everything as simple as possible.

1. I started with a simple [Trello](https://trello.com/) board for brainstorming the features I'd need to make an MVP and created cards for anything I considered a unit of work or a question that needed to be answered. I picked Trello because it's the simplest work-tracking software to get started for a basic work tracker.

2. I used the [flask-skeleton](https://github.com/realpython/cookiecutter-flask-skeleton) variant of [cookiecutter](https://github.com/audreyr/cookiecutter) to stand up a dockerized python backend. SQLAlchemy makes for simple model definition, flask makes for simple endpoints, cookiecutter sets up the app structure, docker keeps everything clean.

3. I built a simple frontend with [create-react-app](https://github.com/facebook/create-react-app) (using the beauty and simplicity of [hooks](https://reactjs.org/docs/hooks-intro.html) introduced in 16.8) and bootstrapped the UI with [semantic UI](https://react.semantic-ui.com/). I built a form using semantic UI once and was blown away by how easy it was to implement and how powerful the components were out of the box. I highly recommend it based on my experience. Using hooks and avoiding redux simplified the frontend code dramatically. The only time I wished I had redux was for auth, but that was even replaceable by using [Context](https://reactjs.org/docs/context.html).

4. I deployed the app with [Heroku](https://www.heroku.com/) (backend) and [Netlify](https://www.netlify.com/) (frontend). Netlify was dead simple: just connect it to the github repo and it deployed automatically. Truly impressive! Heroku took a few minutes more, having to create a customer docker entrypoint to fit their deploy requirements, but soon that was up and running also.

I built the app and had it deployed in a weekend. The only thing missing was a 3rd party API integration with their registration app (BikeReg) that I haven't tackled yet, but the basic functionality is all there. It was exciting to finally see my knowledge of prototype/MVP construction come together.

The one potential hitch: when I started looking into integrating with the BikeReg API, I found a news item from Feb 2019 that dropped a pit into my stomach: [Event Day Check-In](https://www.bikereg.com/Users/Public/Director/Feature.aspx?fid=100), which basically does everything I just spent the time and energy building. (::screaming-and-crying-endlessly-dot-gif::) However! Upon talking to my friends, it sounds like their internet connection is unreliable, and they would strongly prefer just running a local instance of the frontend and dockerized backend on a laptop. So it seems like the actual work (except deployment) wasn't throwaway after all, though I could probably throw away several features I had built planning on having it deployed publicly.

I'm hoping that we get to actually use this app to manage some races later this year. I'll post updates if we do. In the meantime, the repos are located here:

- [race-support frontend](https://github.com/stahlscott/race-support)
- [race-support backend](https://github.com/stahlscott/race-support-backend)
