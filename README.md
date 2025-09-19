# RIT people template
This template makes it easy to set up a NextJS site for your people.rit.edu page.

## Quickstart
1. Create a new repo using the template
2. On the repo's GitHub page, go to `settings > environments > deploy`.
3. Add a variable called `SSH_HOST`. Assign it the value `gibson.rit.edu`.
4. Add a variable called `SSH_USER`. Assign it your RIT username (xyz1234).
5. Add a secret called `SSH_PASSWORD`. Assign it your RIT account password.
6. `cd` into the repo with command prompt. Run `npm i`.
7. Edit the code. When you are ready to deploy, commit your code to GitHub and it will automatically deploy to your site.

Note: if you're ever referencing a file using, for example, `src='file.png'`, use ```src={`${bp}/file.png`}``` instead. This is because the base URL of your personal RIT site is technically people.rit.edu/username, not people.rit.edu, so the router gets confused.
