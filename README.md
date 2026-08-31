# Student Portfolio Template

A personal portfolio you can customize and publish free with GitHub Pages. The current version includes two switchable styles—**Engineering** and **Business**—with light and dark modes. You can change the content without knowing React or TypeScript.

## 1. Install the tools

Install these once:

- [Visual Studio Code](https://code.visualstudio.com/) to edit the project.
- [Git](https://git-scm.com/downloads) to save and upload changes.
- [Node.js LTS](https://nodejs.org/en/download), which includes npm, to run the website.
- A free [GitHub account](https://github.com/signup) to host the code and website.

Open a terminal and check that each command prints a version:

```bash
git --version
node --version
npm --version
```

Use Node `20.19.0` or newer, or Node `22.12.0` or newer. If a command is missing, restart the terminal after installing its tool.

## 2. Tell Git who you are

Git adds this name and email to your commits. Run these commands once, replacing the example values with your own:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Use an email connected to your GitHub account, or your GitHub no-reply email. Confirm the settings:

```bash
git config --get user.name
git config --get user.email
```

`--global` applies the identity to all projects on this computer. Remove it from a command if you need a different identity only for this repository.

## 3. Copy and open the project

On GitHub, select **Fork** to create your own copy. On your fork, select **Code**, copy the HTTPS address, and run:

```bash
git clone https://github.com/<your-username>/<repository>.git
cd <repository>
```

Replace the placeholders with the values from your copied address.

In Visual Studio Code, select **File > Open Folder** and choose the cloned folder. Then select **Terminal > New Terminal**. The terminal should be in the folder containing `package.json`.

## 4. Install and preview

Install the exact saved dependencies:

```bash
npm ci
```

npm reads `package-lock.json` and creates the local `node_modules/` dependency folder for you; do not edit that folder.

Start the local website:

```bash
npm run dev
```

Open the address printed in the terminal, usually `http://localhost:5173/`. Saving a file refreshes the preview. Press `Ctrl+C` in the terminal when you want to stop it.

## 5. Customize the portfolio

Most personal content is in `src/data/`:

| Change                                          | File                                                |
| ----------------------------------------------- | --------------------------------------------------- |
| Name, headline, email, resume, and social links | `src/data/profile.ts`                               |
| About text                                      | `src/data/about.ts`                                 |
| Section headings                                | `src/data/sectionContent.ts`                        |
| Education                                       | `src/data/education.ts`                             |
| Work and volunteering                           | `src/data/experience.ts`                            |
| Awards                                          | `src/data/awards.ts`                                |
| Projects, images, links, and tools              | `src/data/projects.ts`                              |
| Gallery photos and videos                       | `src/data/gallery.ts` and `src/data/videos.ts`      |
| Skills and certificates                         | `src/data/skills.ts` and `src/data/certificates.ts` |
| Blog links and journal posts                    | `src/data/blog.ts` and `src/data/journalPosts.ts`   |
| Section order and visibility                    | `src/data/navigation.ts`                            |
| First style shown                               | `src/data/template.ts`                              |

Put new files in the matching folder:

- Project images: `src/assets/projects/`
- Other images: `src/assets/`
- Resume: `src/assets/documents/`
- Certificate PDFs: `src/assets/certificates/`
- Journal Markdown: `src/content/journal/`

If you change a filename, update its import in the related data file. Give every image useful `imageAlt` text.

### Choose the first style

Edit `src/data/template.ts` and use either `"engineering"` or `"business"`:

```ts
export const selectedTemplateId = "engineering";
```

Visitors can still switch styles. Their browser remembers their choice, so clear the site's browser data when testing a new initial value.

## 6. Check your changes

In the browser, check both styles, light and dark mode, and a narrow window. Then run:

```bash
npm test
npm run lint
npm run build
```

All three commands should finish without errors. To inspect the built version, run `npm run preview`, open its address, and press `Ctrl+C` when finished.

## 7. Make your first commit

First, review which files changed:

```bash
git status
git add .
git diff --staged
```

If the staged changes look correct, save them as a commit and upload them:

```bash
git commit -m "Customize my portfolio"
git branch -M main
git push -u origin main
```

Later updates only need `git add .`, `git commit -m "Describe the change"`, and `git push`.

Before `git add .`, always check `git status`. Never commit passwords, access tokens, secret values, or `.env` files. Generated `node_modules/` and `dist/` folders should also stay out of Git.

### GitHub sign-in on the first push

An HTTPS push may open a browser or Git Credential Manager for sign-in. GitHub does not accept your account password in a terminal; if prompted there, use a personal access token instead and never save that token in the project.

## 8. Publish with GitHub Pages

This repository already has a GitHub Actions workflow named **Deploy to GitHub Pages**.

1. Open your repository on GitHub.
2. Select **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push a commit to `main`.
5. Open **Actions** and select the latest workflow run.

A yellow icon means it is running, green means it succeeded, and red means you should open the failed step to read its message. After a successful run, GitHub shows the published website address.

See [DEPLOYMENT.md](DEPLOYMENT.md) for URL settings and deployment troubleshooting.

## Common problems

### `package.json` cannot be found

The terminal is in the wrong folder. In VS Code, open the folder that contains `package.json`, then open a new terminal.

### The preview does not update

Check that `npm run dev` is still running, save the file, and confirm you opened the address printed by that command.

### An image or PDF is missing

Check the filename, capitalization, import path, and folder. `npm run build` usually reveals broken imports.

### `git push` is rejected

Run `git status` and confirm you cloned your own fork. If GitHub says the remote has newer work, run `git pull --ff-only`, then try `git push` again.

### SWC reports `Failed to load native binding`

Recreate dependencies from the lock file:

```bash
mv node_modules node_modules.corrupt
npm cache verify
npm ci
```

On Windows PowerShell, use `Rename-Item node_modules node_modules.corrupt` for the first command. Delete the backup after the site works.

## Developer notes

The app uses React 19, TypeScript, Vite, Chakra UI, Tailwind CSS, Vitest, ESLint, GitHub Actions, and GitHub Pages. Shared components are in `src/components/`, templates are in `src/templates/`, and shared types are in `src/types/portfolio.ts`.

## License

MIT
