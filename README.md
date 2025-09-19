This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Next.js

- React.js full-stack web development framework.
- In addition to react that builds the UI, next.js also provides features like optimization, rendering, data fetching etc.
- Opinionated framework (file, folder structure conventions)

## Features

1. Routing - File based routing
2. API routes
3. Rendering: SSR, SSG, CSR
4. Data fetching/File system
5. Optimization: Image, file optimization
6. Styling

## React server component

- Architecture introduced by react team. Types:

1. Server components
2. Client components

### Server components

- All React components in Next.js are treated as server components.
- These components can perform server side tasks like data fetching, files read, database data fetching, async tasks.
- Cannot use react hooks, events, user interaction

### Client components

- Can use react hooks, events, user interaction
- Traditional react components
- Use the directive `use client` at the top of component file

## Routing

- File based routing
- All routes must be inside `/src/app` directory
- Every route must have `page.js` or `page.tsx` file
- page.js/page.tsx file must have a default export component

1. Simple routes

- Create a folder inside /src/app and add page.js file
- /src/app/about/page.js

2. Nested routes

- Create a nested folder for nested routes
- /src/app/courses/web-design/page.js
- /src/app/courses/api/node-js/page.js

3. Dynamic routes

- Create a folder enclosed by []
- /src/app/products/[productId]/page.js

4. Nested dynamic route

- /src/app/products/[productId]/reviews/[reviewId]/page.js

5. Catch all segments

- /src/app/blogs/[...slug]/page.js

6. Route groups

- /src/app/(auth)/...

7. Private folders

- /src/app/\_components

## Layouts

- UI component that is shared among different pages
- `layout.js` or `layout.tsx`

## Nested layouts

- /src/app/products/layout.js

## Files (Special files of next.js)

- page.js
- layout.js
- not-found.js
- loading.js
- error.js // always client component

## Link

## Params & searchParams

- params: dynamic route params => available on page.js & layout.js
- searchParams: query => available on page.js

## Metadata

- Metadata api is used to define metadata of page.
- page.js / layout.js
- Useful for search engines (SEO)
- static: metadata
- dynamic: generateMetadata

## Additional packages

- React hook form
- React icons
- React toastify
- Tailwind (CSS Framework)/Flowbite

## Auth

Login -> token -> store (local storage)
if authToken -> User is logged in -> use this authToken in api request

- local storage: 5MB: Browser: data is stored forever
- session storage: 5MB: Browser: data is cleared on tab closed
- cookie storage: 4KB: Browser and server: expiry date can be set

## Rendering

- Process of transforming component code into UI.
- Client Side Rendering (CSR) and Server Side Rendering (SSR)

## CSR

- If rendering is done in browser -> CSR

## SSR

- If rendering is done in server -> SSR

=======================================================================

# React Server Components

- Architecture designed by react team.
- Uses both client and server environment functionality.
- Dual component model
  - Client component
  - Server component

## RSC -> Client component

- Interactivity
- Event
- State management
- Add "use client" directive at the top

## RSC -> Server component

- Fetch data
- Send api requests
- Metadata
- Server component is by default in next.js

## Payment via khalti

1. Click pay via khalti
2. Responds with khalti payment url
3. Redirect to khalti payment url
4. User will do the payment
5. Khalti will verify the payment
6. Khalti will redirect back to return_url
7. Developers need to handle the khalti payment using status, and update payment

## Payment via Stripe

1. Use Stripe SDK
2. On payment initiate, the api responds with `client_secret`
3. Use this client secret in frontend sdk
4. Confirm card payment via stripe
5. Use the result to confirm payment in our app.

## Todo Next

- Product details page
- Product pagination
- Dashboard
- Multi vendor
- Deployment
- Integration
