# Clean Code Comments

If you really need to comment your code then the comments need to be up-to-date. This tool helps manage that so your documents rely on accurate comments. No comments are better than misleading comments.

## How it Works!

We scrape "git blame" to find timestamps of each line. We then look for comment lines with very out-of-date timestamps compared to the surrounding code. The open source version only works with commented lines above the code line. The commercial version uses an extra system that provides more comment analysis like inline comments.

## Start

Easy way to see all the comments for your code project.

cd reactui

npm start

npm test

## Inspiration For This Project

I wanted an easier way to generate docs from comments. There are automation tools for that. The problem is if your docs rely on very outdated comments then no documents could actually be better than out-of-date documents.

# Features

1. Group comments together by Jira #

2. Leverage TODOs in the comments.

3. Sort by biggest timestamp differences (comment timestamp versus code timestamp)

# Contributors

Nate Sire

Chris Tulin

Nik Studer
