import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about","routes/about.tsx"),
    route("career","routes/career.tsx"),
    route("signin","routes/signin.tsx"),
    // nester can be done by route and layout 
] satisfies RouteConfig;
