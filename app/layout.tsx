import {Links, Meta, NavLink, Outlet, Scripts, ScrollRestoration} from "react-router";

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
                    <p>&copy; 2025 Archaeology of Roman Britain</p>
                    <br />
                    <p>
                        Created by Lucas Bacchi, Noah Yocum, Matt Chiu, and
                        Keirston Artis for CSAS 2000 at Wentworth Institute of
                        Technology.
                    </p>
                    <NavLink to={"Works-Cited"}>
                        Works Cited Page
                    </NavLink>
                </footer>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}
