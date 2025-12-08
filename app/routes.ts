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
        route("hadrians-wall", "./routes/hadriansWall.tsx"),
        route("mons-graupius", "./routes/mons-graupius.tsx"),
        route("vindolanda", "./routes/vindolanda.tsx"),
        route("vindolanda-tablets", "./routes/vindolanda-tablets.tsx"),
        route("geography", "./routes/geography.tsx"),
        route("culture", "./routes/culture.tsx"),
        route("pre-roman-britain", "./routes/pre-roman-britain.tsx"),
        route("first-contact", "./routes/first-contact.tsx"),
        route("claudius-invasion", "./routes/claudius-invasion.tsx"),
        route("boudiccan-revolt", "./routes/boudiccan-revolt.tsx"),
        route(
            "construction-hadrians-wall",
            "./routes/construction-hadrians-wall.tsx"
        ),
        route("severan-campaigns", "./routes/severan-campaigns.tsx"),
        route("carausian-revolt", "./routes/carausian-revolt.tsx"),
        route(
            "proclamation-constantine",
            "./routes/proclamation-constantine.tsx"
        ),
        route("great-conspiracy", "./routes/great-conspiracy.tsx"),
        route("end-roman-rule", "./routes/end-roman-rule.tsx"),
        route("british-resources", "./routes/resources.tsx"),
        route("works-cited", "./routes/Works-Cited.tsx"),
        route("sitemap", "./routes/sitemap.tsx")
    ])
] satisfies RouteConfig;
