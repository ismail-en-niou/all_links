# 🔗 My Social Links Hub

A beautiful, responsive link-in-bio page built with Next.js 15, TypeScript, and Tailwind CSS. Display all your social media links in one stylish place!

## ✨ Features

- 🎨 Beautiful gradient design with animations
- 📱 Fully responsive layout
- 🌙 Dark mode support
- ⚡ Fast and optimized with Next.js 15
- 🎯 Easy to customize
- 💅 Smooth hover effects and transitions

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Customization

### 1. Update Your Profile Information

Edit `app/page.tsx` to change your name and bio:

```typescript
<ProfileHeader
  name="Your Name"
  bio="Welcome to my social links! Connect with me on all platforms 🚀"
/>
```

### 2. Add Your Social Media Links

Edit `app/data/links.ts` to customize your links:

```typescript
export const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://instagram.com/yourusername", // Change this!
    icon: "📷",
    color: "from-purple-600 to-pink-600"
  },
  // Add, remove, or modify links as needed
];
```

### 3. Add Your Profile Picture (Optional)

To add your avatar, pass the `avatar` prop to `ProfileHeader`:

```typescript
<ProfileHeader
  name="Your Name"
  bio="Your bio"
  avatar="/your-image.jpg"
/>
```

Place your image in the `public` folder first.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 🛠️ Built With

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

Made with ❤️ using Next.js

