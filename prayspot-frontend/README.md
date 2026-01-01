# Official Repository of Prayspot

All the best practises, naming conventions, information and much more. This is the readme file for general information and purposes, you can find expicit readme files for backend & frontend stuff in their directories.

## How to start?

**Prerequisites**

- node, git, java, expo go, postgresql, intellij idea

**What to do**

1. Clone this repo
2. Open file (terminal method, you can do it manually too by opening prayspot-frontend in vscode)

- cd prayspot
- cd prayspot-frontend
- code .

## Branch naming convention

initials/feature_name

Example: kk/adding_expomaps

## Feature Workflow

If you’re working on a feature, fixing a bug, or making any changes in the app, **never push your code directly to main**. We use branches to manage our workflow. Here’s an example of how it should be done:

1. Start always from main branch
2. Git pull
3. git checkout -b BRANCH_NAME
4. npm i

Now you can make some changes in the code without directly affecting the main branch. Lets say you are finished with your changes:

5. git add .
6. git commit -m "COMMIT_DESCRIPTION"
7. git push origin BRANCH_NAME

Now you can checkout back to main branch if you want.

## Pull request

After pushing your changes, open the GitHub repository. You’ll find your created pull request there. Fill in the details, submit it, and wait for the CTO to review and approve your PR.

Naming convention: type(area): example message

**type examples:**

feat → new feature

fix → Bugfix

chore → regular updates, no direct code impact

refactor → change of code structuring

docs → documentations

test → test implementation

## Start developing

To start developing you must start both the frontend and backend in order to

(Inside VScode)

1. cd prayspot-frontend
2. npm i

3. Create .env file (in root folder)
4. Paste the following inside .env
   EXPO_PUBLIC_API_URL=http://[YOUR_IP_ADDRESS]:8080/api
   EXPO_PUBLIC_API_URL_WEB=http://localhost:8080/api

5. npx expo start

(Inside intelliJ)

1. cd prayspot-backend
2. ./mvnw clean
3. ./mvnw spring-boot:run

Note:
Your IP address can change from the area you start developing in. Make sure to update your .env if you are in a different place.
Im working on a better solution but for now thats it.
