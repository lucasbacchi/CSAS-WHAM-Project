import {
    type RouteConfig,
    index,
    layout,
    route
} from "@react-router/dev/routes";

export default [
    layout("layout.tsx", [
        index("routes/home.tsx"),
        route("timeline", "./routes/timeline.tsx"),
        route("hadrians-wall", "./routes/hadriansWall.tsx")
    ])
] satisfies RouteConfig;
