# Official Repository of Prayspot

All the best practises, naming conventions, information and much more. This is the readme file for general information and purposes, you can find expicit readme files for backend & frontend stuff in their directories.

## How to start?

**Prerequisites**
- node
- git
- java
- random code editor
- expo go (for mobile view)
- postgresql (if working with db)

**What to do**
1. Clone this repo
   
2. Open file (terminal method, you can do it manually too by opening prayspot-frontend in vscode)
  - cd prayspot
  - cd prayspot-frontend
  - code .

## Feature Workflow

If you’re working on a feature, fixing a bug, or making any changes in the app, **never push your code directly to main**. We use branches to manage our workflow. Here’s an example of how it should be done:

1. Start always from main branch
2. Git pull (Pulls newest changes to your local main)
3. git checkout -b BRANCH_NAME_NACH_CONVENTION
4. npm i

Now you can make some changes in the code without directly affecting the main branch. Lets say you are finished with your changes:

5. git add .
6. git commit -m "DESCRIPTION_OF_COMMIT"
7. git push origin BRANCH_NAME_NACH_CONVENTION

Now you can checkout back to main branch if you want.
