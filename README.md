# YauCode-AI - AI Service Platform Project

This is a repository for a Full-Stack project -  YauCode-AI

## This Project was created using Next.js 13.4 App Router: React, Typescript, TailwindCSS, PrismaORM, Planetscale, Clerk, Stripe, Crisp.Chat

![image](/public/screenshots/yai-main.png)

## Features:

- Created using **NextJS 13.4** framework (AppRouter folder structure)
- Type-Safe Code: **Typescript**
- Modern styling, effects and animations using **TailwindCSS**
- Fully responsive design on all screens
- **Clerk** Authentication (Email, **Google**, **GitHub**)
- Conversation Generation Tool (Open AI)
- Image Generation AI Tool (Open AI)
- Code Generation AI Tool (Open AI)
- Video Generation AI Tool (Replicate AI)
- Music Generation AI Tool (Replicate AI)
- **Stripe** integration: monthly subscription payments and subscriptions cancelling
- Free Plan / Pro Plan features. Free Plan users limited to only 5 free generation. Upgrade to Pro Plan subscription using **Stripe** for unlimited generations.
- Customers support via **Crisp.Chat**
- Client form validation and handling using **react-hook-form**
- Server error handling with **react-hot-toast**


### For DEMO: 
- use [Stripe Testing Cards](https://stripe.com/docs/testing)

### Cloning the repository

```shell
git clone https://github.com/YauCode/yaucode-ai.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Setup Prisma

Add MySQL Database (I used PlanetScale)

```shell
npx prisma db push
```

### Start the app

```shell
npm run dev
```

## SCREENSHOTS

#### Landing Page:
![image](/public/screenshots/yai-landing.png)

#### Login:
![image](/public/screenshots/yai-login.png)

#### Main Page / Dashboard:
![image](/public/screenshots/yai-main.png)

#### Conversation Page:
![image](/public/screenshots/yai-conversation.png)

#### Image Generation Page:
![image](/public/screenshots/yai-image.png)

#### Video Generation Page:
![image](/public/screenshots/yai-video.png)

#### Music Generation Page:
![image](/public/screenshots/yai-music.png)

#### Code Generation Page:
![image](/public/screenshots/yai-code.png)

#### Account Settings Generation Page:
![image](/public/screenshots/yai-settings.png)

#### Upgrade to Pro Modal:
![image](/public/screenshots/yai-pro.png)

#### Stripe subscription example:
![image](/public/screenshots/yai-stripe.png)

#### Crisp.Chat support conversation:
![image](/public/screenshots/yai-crisp.png)