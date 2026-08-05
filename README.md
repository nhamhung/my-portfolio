# Student Portfolio Template

This repository is a baseline portfolio template that students can customize, run locally, and deploy to GitHub Pages. It is built with React, TypeScript, Vite, Chakra UI, Tailwind CSS, and React Icons.

Use this template to create a personal portfolio with sections for your profile, education, experience, awards, projects, gallery, videos, skills, certificates, and contact information.

## What You Can Customize

- Your name, headline, location, resume link, contact email, and social links.
- About, education, experience, awards, projects, gallery, videos, skills, and certificates.
- In-site journal posts and external blog post links.
- Portfolio template style: Engineering, Neutral, Business, or Artistic.
- Section order and visibility in the navigation.
- Images, logos, gallery photos, resume PDF, and certificate PDFs.
- Reusable card/action/section components if you want to extend the layout later.

## Can I Edit The Web Page?

Yes. You can edit this web page, but you edit it through the project files, not by changing text directly in the browser preview.

The browser page is a live preview. When you run `npm run dev`, Vite watches the files and refreshes the page after you save changes. Most students should edit content in `src/data/`, write in-site journal posts in `src/content/journal/`, and place files such as images or PDFs in `src/assets/`.

If you want to change the layout, edit the matching folder under `src/templates/`. Shared buttons, cards, and section components live under `src/components/`. Layout changes require more care than content edits, so run the verification commands before publishing.

## Installation And Setup

This guide assumes no previous Git, Node.js, or command-line experience. Complete the operating-system steps first, then follow the shared project steps.

### 1. Install The Required Tools

You need:

- [Git](https://git-scm.com/downloads) to download and update the repository.
- The current **LTS** release from the [official Node.js download page](https://nodejs.org/en/download). npm is included with Node.js.
- A modern browser such as Chrome, Edge, Firefox, or Safari.
- A text editor. [Visual Studio Code](https://code.visualstudio.com/) is beginner-friendly, but it is optional.
- A GitHub account only when you want to fork the template or publish it with GitHub Pages.

This project uses Vite. Its supported Node ranges start at `20.19.0` or `22.12.0`; installing the current Node.js LTS is the simplest choice. See the [Vite compatibility note](https://vite.dev/guide/#scaffolding-your-first-vite-project) when checking an older Node installation.

#### Windows 10 Or 11

Recommended graphical setup:

1. Download and run [Git for Windows](https://git-scm.com/install/windows). Keep the default installer choices unless your school provides different instructions.
2. Download the **LTS** Windows Installer from [Node.js](https://nodejs.org/en/download) and complete the installer. npm is installed with Node.js.
3. Close and reopen PowerShell, Command Prompt, or the VS Code terminal so the new commands are added to your terminal session.

Optional WinGet setup in PowerShell:

```powershell
winget install --id Git.Git -e --source winget
winget install --id OpenJS.NodeJS.LTS -e --source winget
```

WinGet is included with App Installer on supported Windows versions. Read [Microsoft's WinGet guide](https://learn.microsoft.com/windows/package-manager/winget/) if `winget` is not recognized.

#### macOS

Recommended setup:

1. Download the **LTS** macOS Installer from [Node.js](https://nodejs.org/en/download) and complete the installer.
2. Open Terminal and install Apple's Command Line Tools, which include Git:

```bash
xcode-select --install
```

Follow the macOS prompts, then close and reopen Terminal. The [official Git macOS guide](https://git-scm.com/install/mac) lists this and other supported installation choices.

Optional [Homebrew](https://brew.sh/) setup:

```bash
brew install git node
```

Homebrew may install the current stable Node release rather than the LTS release. Either is suitable when it meets Vite's minimum version.

#### Linux

Install Git with your distribution's package manager. The [official Git Linux guide](https://git-scm.com/install/linux) lists additional distributions.

Ubuntu, Debian, and their derivatives:

```bash
sudo apt update
sudo apt install git
```

Fedora and related distributions:

```bash
sudo dnf install git
```

Arch Linux and related distributions:

```bash
sudo pacman -Syu git
```

For Node.js on Linux, follow the [npm Node.js installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/) and choose a Node version manager such as `nvm`. After the version manager is installed, select the current LTS release:

```bash
nvm install --lts
nvm use --lts
```

You may instead use your distribution's `nodejs` and `npm` packages, but verify the result carefully: Node 20 must be at least `20.19.0`, while Node 22 or newer must be at least `22.12.0`. Some long-term-support Linux releases provide an older Node version that cannot run this Vite project.

#### Windows Subsystem For Linux

Native Windows PowerShell is sufficient for this project. If you prefer Linux tools, install WSL by following [Microsoft's WSL guide](https://learn.microsoft.com/windows/wsl/install), then use the Ubuntu/Debian instructions inside the WSL terminal.

Keep the repository inside the Linux filesystem, such as `~/projects/my-portfolio`, when working primarily from WSL. Install Git and Node inside WSL even if they are already installed on Windows; the two environments manage tools separately.

#### ChromeOS

On a supported Chromebook, enable **Settings > About ChromeOS > Developers > Linux development environment**. Google documents the process in [Set up Linux on your Chromebook](https://support.google.com/chromebook/answer/9145439?hl=en).

The resulting terminal uses Debian, so follow the Ubuntu/Debian Git instructions and the Linux Node.js instructions above. A school-managed Chromebook may block the Linux environment; contact the school administrator if the option is unavailable.

### 2. Verify Git, Node.js, And npm

Open a new terminal and run:

```bash
git --version
node --version
npm --version
```

Successful output resembles:

```text
git version 2.x.x
v24.x.x
11.x.x
```

Your exact numbers may differ. Node 20 must be at least `20.19.0`, while Node 22 or newer must be at least `22.12.0`; a current LTS version such as `22.x` or `24.x` is suitable. If a command is not found, close and reopen the terminal first, then revisit the installation section for your operating system.

### 3. Get The Project

Choose either Git clone or ZIP download. Do not do both.

#### Option A: Clone With Git

On the repository's GitHub page, select **Code** and copy the HTTPS address. Then run:

```bash
git clone https://github.com/<owner>/<repository>.git
cd <repository>
```

Replace `<owner>` with the GitHub username or organization and `<repository>` with the repository name. For example, if the address ends in `student/my-portfolio.git`, use `cd my-portfolio`. Do not type the angle brackets.

#### Option B: Download A ZIP File

1. On GitHub, select **Code > Download ZIP**.
2. Extract the downloaded ZIP file.
3. Open the extracted folder in VS Code, then select **Terminal > New Terminal**. The terminal should open inside the project folder.

Without VS Code, open PowerShell or Terminal and move into the extracted directory. These examples assume the folder is named `my-portfolio-main`:

Windows PowerShell:

```powershell
cd "$HOME\Downloads\my-portfolio-main"
```

macOS, Linux, WSL, or ChromeOS:

```bash
cd ~/Downloads/my-portfolio-main
```

Adjust the path if you extracted the folder somewhere else.

### 4. Install Project Dependencies

Confirm that the terminal is inside the folder containing `package.json`, then run:

```bash
npm install
```

This reads `package.json` and `package-lock.json` and creates a local `node_modules/` folder. The first installation can take a few minutes. Do not edit or upload `node_modules/`.

### 5. Start The Portfolio Locally

Run:

```bash
npm run dev
```

Vite prints a local address, usually `http://localhost:5173/`. Hold `Ctrl` and select the address, or paste it into your browser. If port `5173` is busy, Vite chooses another port; use the exact address printed in your terminal.

Keep the terminal running while you work. Saving a project file refreshes the browser automatically. To stop the server, return to the terminal and press `Ctrl+C`. Run `npm run dev` again whenever you want to restart it.

### 6. Make Your First Edit

Start with `src/data/profile.ts`, save the file, and check the browser preview. Most portfolio content lives in `src/data/`; local journal Markdown lives in `src/content/journal/`; images and PDFs live in `src/assets/`.

Do not edit text only inside the browser page. Browser changes are temporary and disappear on refresh. Save changes in the project files instead.

### 7. Verify Before Publishing

Run each command from the project folder:

| Command           | When To Use It                              | What It Does                                                         |
| ----------------- | ------------------------------------------- | -------------------------------------------------------------------- |
| `npm run test`    | After changing content, data, or components | Runs rendering, navigation, configuration, and portfolio-data tests. |
| `npm run lint`    | After changing TypeScript or React code     | Checks the source for common code-quality problems.                  |
| `npm run build`   | Before publishing                           | Checks TypeScript and creates the production site in `dist/`.        |
| `npm run preview` | After a successful build                    | Opens the production build locally for a final browser review.       |

Example verification sequence:

```bash
npm run test
npm run lint
npm run build
npm run preview
```

`npm run preview` prints another local URL and continues running. Open that URL, inspect the site, then press `Ctrl+C` in the terminal to stop preview mode.

### 8. Update An Existing Copy Safely

Before updating, save your work and check what has changed:

```bash
git status
```

For a cloned repository, commit or back up local edits before pulling. Then run:

```bash
git pull --ff-only
npm install
```

`--ff-only` stops instead of creating an unexpected merge when the local and remote histories differ. If Git reports a conflict or says a fast-forward is not possible, do not discard your files; ask a teacher, mentor, or experienced Git user to help combine the changes.

For a ZIP download, download the newer version into a separate folder and compare your customized `src/data/`, `src/content/`, and `src/assets/` files. Do not overwrite your existing folder until your work is backed up.

## Project Structure

| Path                         | What To Edit There                                                                           |
| ---------------------------- | -------------------------------------------------------------------------------------------- |
| `src/data/profile.ts`        | Your name, hero text, contact email, resume, and social links.                               |
| `src/data/about.ts`          | About section content and highlights.                                                        |
| `src/data/artistic.ts`       | Artistic notebook introduction, interests, learning, hobbies, activities, and goals.         |
| `src/data/sectionContent.ts` | Eyebrows, headings, and introductory descriptions for every non-home section.                |
| `src/data/education.ts`      | Schools, degrees, coursework, and education dates.                                           |
| `src/data/experience.ts`     | Work, internship, leadership, or volunteer experience.                                       |
| `src/data/awards.ts`         | Awards, honors, and recognitions.                                                            |
| `src/data/projects.ts`       | Project titles, descriptions, covers, image alternatives, links, and technologies.           |
| `src/data/gallery.ts`        | Gallery image entries.                                                                       |
| `src/data/videos.ts`         | Video entries and links.                                                                     |
| `src/data/skills.ts`         | Skill groups and tools.                                                                      |
| `src/data/certificates.ts`   | Certificate metadata and PDF imports.                                                        |
| `src/data/blog.ts`           | External blog links, such as WordPress posts.                                                |
| `src/data/journalPosts.ts`   | In-site journal post metadata and Markdown imports.                                          |
| `src/data/template.ts`       | Choose the initial portfolio style shown before a visitor saves a preference.                |
| `src/data/navigation.ts`     | Section order, labels, and visibility.                                                       |
| `src/content/journal/`       | Markdown files for journal posts that are published directly inside this site.               |
| `src/types/portfolio.ts`     | Shared TypeScript types for portfolio data. Use this as a reference when editing data files. |
| `src/assets/`                | Images, project covers, logos, gallery photos, PDFs, and other static files.                 |
| `src/assets/documents/`      | Resume and other downloadable document files.                                                |
| `src/components/shared/`     | Reusable UI helpers for cards, section shells, and external actions.                         |
| `src/templates/`             | Presentation templates that render the shared portfolio data in different visual styles.     |
| `src/test/`                  | Automated tests, kept separate from student-editable content files.                          |

Most students should start with `src/data/profile.ts`, then update the section-specific files under `src/data/`.

## Customize Your Portfolio

### Profile, Contact, And Social Links

Edit:

- `src/data/profile.ts`

Update your display name, short introduction, location, email, resume link, and social links. Use a public-facing email or contact method that you are comfortable publishing online.

### Sections And Navigation

Edit:

- `src/data/navigation.ts`
- `src/data/sectionContent.ts`

Use `navigation.ts` to control which sections appear in navigation and how they are ordered. Keep navigation IDs aligned with the matching page sections.

Use `sectionContent.ts` to edit the eyebrow, heading, and introductory description shown below the heading for About, Education, Experience, Awards, Projects, Gallery, Journal, Skills, and Contact. The Home introduction remains in `src/data/profile.ts`.

### Choose A Template Style

The published website includes a **Portfolio style** button in every header. It lets visitors switch immediately among:

- `engineering`: fixed top navigation, a technical hero, and full-width stacked sections.
- `neutral`: a relaxed learning journal with a full-width masthead, personal notes, editorial spreads, and visual project stories.
- `business`: an organized student showcase with sticky numbered contents, clear skill summaries, and structured project cases.
- `artistic`: a creative notebook for interests, schoolwork, activities, personal goals, and ideas that are still taking shape.

The visitor's latest choice is saved in that browser. Switching styles keeps the current section, journal post, page layout, and light/dark color mode.

To choose the initial style for first-time visitors, edit:

- `src/data/template.ts`

```ts
export const selectedTemplateId = "neutral";
```

Use `"engineering"`, `"neutral"`, `"business"`, or `"artistic"`. The supplied default remains `"engineering"`.

All four styles use the same shared content files. Students do not need to duplicate their profile, projects, gallery, or journal data when switching. Artistic adds a small optional notebook file described below.

If a browser has already saved a visitor choice, that choice takes priority over `selectedTemplateId`. To test the source default again, clear the site's browser data or run this in the browser console and refresh:

```js
localStorage.removeItem("portfolio-template-id");
location.reload();
```

Portfolio style changes the page structure. The nearby sun/moon button changes only the color mode.

### Customize The Artistic Notebook

Edit:

- `src/data/artistic.ts`

This file is designed for secondary-school, high-school, and early-stage students who may not have formal work experience yet. Its fields are:

| Field                       | What To Write                                                                         |
| --------------------------- | ------------------------------------------------------------------------------------- |
| `introduction.eyebrow`      | A short label, such as `Creative notebook`.                                           |
| `introduction.headline`     | One sentence about how you learn, create, or explore.                                 |
| `introduction.intro`        | A brief welcome to your notebook.                                                     |
| `interests`                 | Subjects, questions, causes, or ideas you enjoy exploring.                            |
| `currentLearning`           | Topics or skills you are learning now.                                                |
| `hobbies`                   | Activities you enjoy outside formal schoolwork.                                       |
| `activities`                | Real clubs, teams, volunteering, leadership, part-time work, or community activities. |
| `activities[].title`        | Your actual role, such as `Choir Member` or `Class Representative`.                   |
| `activities[].organization` | The school, club, team, or community name.                                            |
| `activities[].period`       | An optional date or period.                                                           |
| `activities[].description`  | One or more short, truthful notes about what you did or learned.                      |
| `personalGoals`             | Things you genuinely hope to try, learn, or contribute next.                          |

Empty `interests`, `currentLearning`, `hobbies`, or `personalGoals` arrays are omitted from the Artistic About page. The Artistic Activities section appears when either `src/data/artistic.ts` has activities or `src/data/experience.ts` has entries. Awards appears only when `src/data/awards.ts` has entries.

You do not need to invent internships, job titles, awards, or achievements to fill space. School projects, clubs, hobbies, volunteering, questions, and learning goals are valid portfolio material.

### Education, Experience, Awards, Projects, Gallery, Videos, And Skills

Edit the matching file under `src/data/`:

- `src/data/education.ts`
- `src/data/experience.ts`
- `src/data/awards.ts`
- `src/data/projects.ts`
- `src/data/gallery.ts`
- `src/data/videos.ts`
- `src/data/skills.ts`

The shared types in `src/types/portfolio.ts` show the expected fields for each kind of data.

Each project also owns its presentation image. Place project covers under `src/assets/projects/`, import them in `src/data/projects.ts`, and fill in both `image` and `imageAlt`. Describe what is visible in `imageAlt`; do not use the filename as alternative text. Neutral, Business, and Artistic reuse these project covers automatically, so project images should not be added to `src/data/gallery.ts` unless they also belong in the personal Gallery section.

### Journal And Blog Posts

Use the Journal section for two kinds of writing:

- In-site posts that live directly in this portfolio.
- External posts that link to another site, such as WordPress.

For an in-site journal post, add a Markdown file under:

- `src/content/journal/`

Then add its title, date, summary, tags, and content import in:

- `src/data/journalPosts.ts`

In-site posts support standard Markdown such as headings, **bold text**, _italics_, links, ordered and unordered lists, quotes, code blocks, and images. Write Markdown directly in the `.md` file; embedded raw HTML is intentionally not rendered.

For an external blog post, update:

- `src/data/blog.ts`

External blog posts open outside the site. In-site journal posts open directly inside this portfolio.

### Images And Logos

Place images and logos in:

- `src/assets/`

If you replace an existing image with a new filename, update the import or reference in the matching `src/data/` file. Run `npm run build` after replacing assets so TypeScript and Vite can catch missing files.

### Certificate PDFs

Place certificate PDFs in:

- `src/assets/certificates/`

Then update:

- `src/data/certificates.ts`

If the PDF filename changes, update the import in `src/data/certificates.ts` as well.

## Deploy To GitHub Pages

This project is already configured for GitHub Pages deployment through GitHub Actions.

Short version:

1. Push your code to GitHub.
2. In your repository, go to Settings > Pages.
3. Set Source to GitHub Actions.
4. Push to the `main` branch.
5. Check the Actions tab and the published Pages URL.

For the detailed guide, including URL patterns and troubleshooting, read [DEPLOYMENT.md](DEPLOYMENT.md).

## Common Local Issues

| Symptom                                                      | What To Try                                                                                                                                                                           |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `git`, `node`, or `npm` is not recognized                    | Close every terminal and open a new one. If the command is still missing, reinstall that tool using the operating-system section above and ensure the installer adds it to your PATH. |
| Node is installed but Vite reports an unsupported version    | Run `node --version`. Node 20 must be `20.19.0` or newer; Node 22+ must be `22.12.0` or newer. Install the current Node LTS and reopen the terminal.                                  |
| `npm` is blocked by a PowerShell script-policy message       | Open Command Prompt and run the same npm command there, or use `npm.cmd`. Do not change the policy to `Unrestricted`; follow your school or organization's Windows policy.            |
| `npm install` says it cannot find `package.json`             | Run `pwd` on macOS/Linux or `Get-Location` in PowerShell and confirm you are inside the extracted or cloned project folder.                                                           |
| `npm install` reports permission errors                      | Do not use `sudo npm install` or install the project packages globally. Confirm that you own the project folder; when using WSL, keep the repository under your Linux home directory. |
| The development server does not start                        | Run `npm install`, read the first error shown, and confirm your Node version. If a port is busy, use the alternate local URL Vite prints.                                             |
| The page does not refresh after an edit                      | Confirm `npm run dev` is still running, save the file, and check that you edited the same project folder that the terminal is serving.                                                |
| I changed text in the browser but it disappeared             | Edit and save the matching file in `src/data/`, `src/content/journal/`, or `src/components/`. The browser is only a preview.                                                          |
| I changed `src/data/template.ts` but still see another style | A visitor choice is saved in this browser. Clear the site's browser data or remove `portfolio-template-id` from local storage.                                                        |
| An image or PDF is missing                                   | Check that the file exists in `src/assets/`, that filename capitalization matches the import, and that the matching path is correct.                                                  |
| TypeScript reports a data error                              | Compare your data file with the matching type in `src/types/portfolio.ts` and check commas, quotes, and required fields.                                                              |
| The deployed site has broken assets                          | Read the base path and troubleshooting sections in [DEPLOYMENT.md](DEPLOYMENT.md).                                                                                                    |

## Tech Stack

- React 19
- TypeScript
- Vite
- Chakra UI v3
- Tailwind CSS
- React Icons
- GitHub Actions
- GitHub Pages

## License

MIT
