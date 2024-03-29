# 🍽️ MisterMenu

MisterMenu is a web app that is a food menu ordering for restaurant.

<details open>
<summary> Table of Contents </summary>

- [🍽️ MisterMenu](#️-mistermenu)
  - [Live URLs](#live-urls)
  - [Our Design](#our-design)
  - [REST API](#rest-api)
  - [Contributors](#contributors)
    - [Contributions Details](#contributions-details)
  - [Issues](#issues)
  - [Tech Stack](#tech-stack)
  - [How to maintain the API?](#how-to-maintain-the-api)
  - [Log](#log)
  - [Getting Started](#getting-started)
    - [Commands](#commands)
    - [Deploy](#deploy)
      - [Deploy to production (manual)](#deploy-to-production-manual)
      - [Deploy to Netlify](#deploy-to-netlify)
  - [License](#license)

</details>

## Live URLs

Access demo at:

- <https://mistermenu.netlify.app>
- <https://mistermenu.jeffrymahbuubi.com>
- <https://mistermenu.bernhardhustomo.com>
- <https://mistermenu.abdehi.com>

## Our Design

- Figma: [@mistermenu/figma](https://www.figma.com/file/R2vcyMmktVMeFGhRPJpPT9/Mister-Menu)

## REST API

- Base API URL: [@mistermenu/railway-express-prisma](https://mistermenu-api.up.railway.app)

| HTTP   | Endpoint             | Description              |
| ------ | -------------------- | ------------------------ |
| GET    | /products            | Get all products         |
| GET    | /products/:productId | Get one product by id    |
| POST   | /products            | Add new product          |
| DELETE | /products            | Delete all products      |
| DELETE | /products/:productId | Delete one product by id |

## Contributors

| Name     | Role                | The Worked Distribution                  | Deployment                                                     |
| -------- | ------------------- | ---------------------------------------- | -------------------------------------------------------------- |
| Abdehi   | Front End Developer | `Front End Developer` & `UI/UX Designer` | [@mistermenu/abdehi](https://mistermenu.abdehi.com)            |
| Jeffry   | Front End Developer | `Front End Developer` & `UI/UX Designer` | [@mistermenu/jeffry](https://mistermenu.jeffrymahbuubi.com)    |
| Bernhard | Front End Developer | `Front End Developer` & `UI/UX Designer` | [@mistermenu/bernhard](https://mistermenu.bernhardhustomo.com) |

### Contributions Details

🖌️ **Figma Design**

- Abdehi
  - Main Menu Page, Menu Header
- Bernhard
  - Recommendation Page, Order Cart Page
- Jeffry
  - Sidebar

🧠 **Front End Development**

- Abdehi
  - Main Menu, Header Navigation, Product Details
- Bernhard
  - Floating Cart, Recommendation
- Jeffry
  - Order Cart and Add Products Logic, API Maintainer

## Issues

1. [Work Distribution](https://github.com/mistermenu/mistermenu/issues/1)
2. [Initialize Project Checklist](https://github.com/mistermenu/mistermenu/issues/2)
3. [Project Priority](https://github.com/mistermenu/mistermenu/issues/3)

## Tech Stack

- ✅ Integration with **Tailwind CSS** ([@vitejs/tailwind](https://tailwindcss.com/docs/guides/vite))
  - PostCSS
  - Autoprefixer
- ✅ **Clean Code** with ([@prettier](https://prettier.io/docs/en/install.html)) and ([@ESLint](https://eslint.org/))
  - Prettier Plugin Tailwind CSS
- ✅ JavaScript that scales using **TypeScript** ([@typescript](https://www.typescriptlang.org/docs/handbook/intro.html))
- ✅ Component approach project with **React v18** ([@react](https://create-react-app.dev/docs/getting-started/))
  - React DOM v18
- ✅ Frontend Framework with **Vite**([@vite](https://vitejs.dev/guide/))
- ✅ REST API made with **Railway-ExpressJS-Prisma** thanks to mentor [@mhaidarhanif](https://github.com/mhaidarhanif)

![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![Eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![ExpressJS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Railway](https://img.shields.io/badge/Railway-131415?style=for-the-badge&logo=railway&logoColor=white)

## How to maintain the API?

1. `git pull` the [mistermenu-api](https://github.com/mistermenu/mistermenu-api)
2. Delete the folder "migrations" located inside prisma folder.
3. run `npm run migrate:reset` and then run `npm run migrate:dev`
4. Git push the new migration
5. Check if the new migration process is successfull by accessing [mistermenu-api](https://mistermenu-api.up.railway.app/products)
6. Login to [mistermenu hoppscotch](https://hoppscotch.io/)
   1. Go to REST and change the environment from "local" to "production"
   2. Go to Collections and use the `POST` method to send the `.JSON` data.

## Log

@Wednesday, 10 May 2023 - deploy new migration of mistermenu-api by [@jeffrymahbuubi](https://www.linkedin.com/in/jeffrymahbuubi/)

## Getting Started

### Commands

| Command                  | Action                                       |
| ------------------------ | -------------------------------------------- |
| `npm install`            | Install all dependencies                     |
| `npm run dev`            | Starts local dev server at `localhost:5173`  |
| `npm run build`          | Build your production site to `./dist`       |
| `npm run preview`        | Preview your build locally, before deploying |
| `npx prettier --write .` | Format all codes with Prettier               |
| `npm run lint:eslint`    | Ruun ESLint                                  |

### Deploy

#### Deploy to production (manual)

You can create optimized production build with:
`npm run build`

The resulting files is `./dist` which typically much smaller and faster to load han the files generated by the development server, and are suitable for deployment to any hosting service you prefer.

#### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/mistermenu/mistermenu)

## License

**MisterMenu** is licensed under the Unlicense license - see the [LICENSE](https://github.com/mistermenu/mistermenu/blob/main/LICENSE) file for details.
