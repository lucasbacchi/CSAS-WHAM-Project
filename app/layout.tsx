import {
    Links,
    Meta,
    NavLink,
    Outlet,
    Scripts,
    ScrollRestoration
} from "react-router";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <main className="pt-16 p-6 container mx-auto">
                    <Outlet />
                </main>
                <footer className="m-8 text-center text-sm text-gray-500">
                    <p>&copy; 2025 Archaeology of Roman Britain Project Team</p>
                    <br />
                    <p>
                        Created by Lucas Bacchi, Noah Yocum, Matt Chiu, and
                        Keirston Artis for CSAS 2000 at Wentworth Institute of
                        Technology.
                    </p>
                    <br />
                    <NavLink to={"works-cited"} className="p-4">
                        Works Cited Page
                    </NavLink>
                    <NavLink to={"sitemap"} className="p-4">
                        Sitemap
                    </NavLink>
                </footer>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}
