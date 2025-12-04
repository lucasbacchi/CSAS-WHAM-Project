import { NavLink } from "react-router";

export default function Resources() {
    return (
        <div className="flex flex-row p-6 gap-4 min-h-screen items-stretch">
            <div>
                <h2 className="text-2xl font-semibold mb-4">The Wealth of Resources in Rome</h2>
                <p className="text-lg mb-4">

                </p>
                <p className="text-lg mb-4">

                </p>
                <p className="text-lg mb-4">

                </p>

                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Roman.Britain.Mining.jpg"
                    alt="Roman Britain — Industrial Mining. Credit: https://en.wikipedia.org/wiki/File:Roman.Britain.Mining.jpg"
                    className="max-w-1/4"
                />
                <NavLink to="/" className="inline-block mt-4 text-blue-600">
                    &larr; Back to Home
                </NavLink>
            </div>
        </div>
    );
}
