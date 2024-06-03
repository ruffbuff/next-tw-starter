This is a [Next.js](https://nextjs.org/)+[Thirdweb](https://thirdweb.com/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Firstly, clone the repo:

```bash
git clone https://github.com/ruffbuff/next-tw-starter.git
# or
gh repo clone ruffbuff/next-tw-starter
```

Second step, redirect to cloned repo and install dependencies:

```bash
cd next-tw-starter

npm install react@18.2.0 react-dom@18.2.0 --save
```

Third step, open ".env.example" file, add your Thirdweb [ClientId](https://thirdweb.com/dashboard/settings/api-keys), and remove "example" tag from file name, so it will be like: ".env".

Last step, run the development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

![Demo0](public/image0.png)

![Demo1](public/image1.png)

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

To learn more about Thirdweb, take a look at the following resources:

- [Thirdweb Documentation](https://portal.thirdweb.com/) - learn about Thirdweb features.
- [Thirdweb YT Guides](https://www.youtube.com/@thirdweb_) - amazing guides to learn about Web3.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
