# CleanComments
Find outdated comments

## How it Works!

We scrape "git blame" to find timestamps of each line. We then look for comment lines with very out-of-date timestamps compared to the surrounding code. Note that this will not work with inline comments unless we build our own diff tool.

## Inspiration For This Project

I wanted an easier way to generate docs from comments. There are tools for that. But the problem is if your docs rely on very outdated comments.

# Features

1. Group comments together by Jira #

2. Leverage TODOs in the comments.

3. Sort by biggest timestamp differences (comment timestamp versus code timestamp)

# Contributors

Nate Sire

Chris Tulin
