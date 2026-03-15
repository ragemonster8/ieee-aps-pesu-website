# IEEE AP-S PESU Website

Official website for the IEEE Antennas and Propagation Society chapter at PES University.

This project aims to build a scalable platform for events, technical resources, blogs, and project showcases for the AP-S community.

---

## Tech Stack

Frontend

* Next.js
* React
* Tailwind CSS
* TypeScript

Version Control

* Git
* GitHub

---

## Project Structure

ieee-aps-pesu-website

backend/ – future APIs and backend services
docs/ – documentation for contributors
website/ – main Next.js application

Inside `website/`:

app/ – Next.js pages and routing
components/ – reusable UI components
services/ – API and data services
types/ – TypeScript models
lib/ – helper utilities
constants/ – static configuration values

---

## Development Setup

Clone the repository:

git clone <repo-url>

Go to the website folder:

cd website

Install dependencies:

npm install

Run the development server:

npm run dev

Open in browser:

http://localhost:3000

---

## Branch Workflow

main → production branch
dev → development branch

Feature branches:

feature-events
feature-blogs
feature-projects

Workflow:

1. Create a branch from `dev`
2. Implement your feature
3. Open a Pull Request to `dev`
4. After review, merge into `dev`

---

## Contributing

Before contributing:

* Read `docs/contributing.md`
* Create a feature branch
* Write clear commit messages
* Open a pull request to `dev`

---

## Future Features

See `docs/ideas.md` for potential features such as:

* Live event dashboard
* Technical blog system
* Project showcase
* Learning resources
* Admin dashboard
