import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  // Home
  index("routes/home.tsx"),

  // Auth V1.
  // layout('layouts/auth-layout.tsx', [
  //   route('auth/login', 'routes/auth/login-page.tsx'),
  //   route('auth/register', 'routes/auth/register-page.tsx'),
  // ])
  // Auth V2.
  ...prefix('/auth', [
    layout('layouts/auth-layout.tsx', [
        route('login', 'routes/auth/login-page.tsx'),
        route('register', 'routes/auth/register-page.tsx'),
      ])
  ])

] satisfies RouteConfig;
