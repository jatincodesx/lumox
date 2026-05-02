# Lumox cPanel Deployment Guide

## Current Hosting Situation

Lumox Technologies is hosted on cPanel, and the domain `lumoxtech.com.au` is registered through VentraIP. The old workflow relied on manually uploading local files to cPanel.

The improved workflow is:

1. Commit changes to GitHub.
2. Merge approved website changes into `main`.
3. GitHub Actions builds the site.
4. GitHub Actions uploads the static `out/` folder to cPanel by FTP.

## Recommended Setup

This repository is configured as a static Next.js export. cPanel only needs to serve the generated files from `out/`.

The deployment workflow is located at:

```text
.github/workflows/deploy-cpanel.yml
```

It runs on every push to `main`.

## GitHub Secrets Required

Create these repository secrets in GitHub:

```text
CPANEL_FTP_SERVER
CPANEL_FTP_USERNAME
CPANEL_FTP_PASSWORD
```

Do not commit FTP details, passwords, API keys, or `.env.local` files.

## Finding FTP Details in cPanel or VentraIP

In cPanel:

1. Open **FTP Accounts**.
2. Use an existing FTP account or create a new account for deployments.
3. Confirm the FTP server/host. This is often your domain, server hostname, or an FTP hostname shown in cPanel.
4. Confirm the FTP username and password.
5. Confirm the FTP account starts in the Lumox domain document root.

For this site, the FTP account should be rooted at:

```text
/home/lumoxtec/public_html
```

The workflow uploads to the FTP account root with `server-dir: ./`. If the FTP account starts in any other folder, the deploy can succeed but the public website will not update.

## Deploying

After the rebuild branch is reviewed and merged:

```bash
git switch main
git pull
git merge draft/lumox-website-rebuild
git push origin main
```

The push to `main` starts the GitHub Actions deployment automatically.

## Rollback

To roll back:

1. Find the last known good commit on `main`.
2. Revert the bad commit or merge commit.
3. Push the rollback commit to `main`.

Example:

```bash
git revert <commit-sha>
git push origin main
```

That push triggers a fresh deployment of the restored build.

## Uploaded Folder

The workflow uploads:

```text
out/
```

The workflow uploads `out/` into the FTP account root. The FTP account must therefore be rooted at the live cPanel document root, `/home/lumoxtec/public_html`. The workflow does not upload `.next/`, `node_modules/`, source files, `.env.local`, or local deployment zips.

## Checks After Deployment

After GitHub Actions completes, check:

- `https://lumoxtech.com.au`
- `https://www.lumoxtech.com.au`
- Homepage hero, services, projects, FitPlus, process, and contact sections.
- Navigation links.
- `/privacy/` and `/terms/`.
- `/robots.txt`.
- `/sitemap.xml`.
- Mobile layout and no horizontal overflow.

## DNS Notes

For VentraIP DNS, confirm:

- `lumoxtech.com.au` points to the cPanel hosting server.
- `www.lumoxtech.com.au` either has a CNAME to `lumoxtech.com.au` or points to the same hosting server.
- cPanel has SSL enabled for both apex and `www`.
- cPanel redirects `www` to apex, or apex to `www`, depending on the preferred canonical setup.

The canonical URL configured in the website is:

```text
https://lumoxtech.com.au
```
