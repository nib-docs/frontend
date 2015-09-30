# Dos and don'ts

## Don't

- NEVER version control dependencies - people end up editing code locally instead of submitting PRs, then you can't update the dependencies (because you'll blow away local changes) and then the project is unmaintainable (because its very time consuming and difficult to figure out what's changed locally vs remotely).
- NEVER version control deps - people are too tempted to edit them in the project and not update the external project, resulting in the project being so out-of-sync it can't be updated. DON'T. DO. IT. EVER!
