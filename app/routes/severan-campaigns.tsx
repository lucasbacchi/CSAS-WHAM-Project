import type { Route } from "../../.react-router/types/app/routes/+types/home";
import { NavLink } from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Severan Campaigns | Roman Britain Timeline" },
        {
            name: "description",
            content:
                "The Imperial Court in York during Septimius Severus campaigns in 208-211 CE."
        }
    ];
}

export default function SeveranCampaigns() {
    return (
        <div className="flex flex-row p-6 gap-4 min-h-screen items-stretch">
            <div>
                <h2 className="text-2xl font-semibold mb-4">
                    Severan Campaigns
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    208-211 CE
                </p>

                <h3 className="text-xl font-semibold mb-2">
                    The Imperial Court in York
                </h3>

                <p className="mb-4">
                    For a brief period, the capital of the Roman Empire was
                    effectively in York, not Rome. Septimius Severus, an
                    African-born Emperor, arrived in Britain with his two sons
                    (Caracalla and Geta) and a massive army. The northern tribes
                    (Caledonians and Maeatae) were raiding. Severus wanted to
                    conquer Scotland once and for all, succeeding where previous
                    attempts failed.
                </p>

                <p className="mb-4">
                    It was a brutal guerrilla war. The Romans cut down forests
                    and built bridges to root out the enemy. The tribes refused
                    to meet in open battle. Severus fell ill and died in
                    Eboracum (York) in AD 211. His death caused a power struggle
                    between his sons. They abandoned the Scottish conquest, made
                    peace with the tribes, and returned to Rome. The border
                    remained at Hadrian's Wall.
                </p>

                <h3 className="text-xl font-semibold mb-2">Further Reading</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>
                        <a
                            href="https://www.archaeologyuk.org/resource/the-campaigns-of-septimius-severus-in-the-far-north-of-britain.html"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Archaeology UK - The Campaigns of Septimius Severus
                        </a>
                    </li>
                </ul>

                <NavLink
                    to="/timeline"
                    className="inline-block mt-4 text-blue-600 hover:underline"
                >
                    &larr; Back to Timeline
                </NavLink>
            </div>

            <div className="max-w-1/3 min-w-1/4">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Portrait_of_family_of_Septimius_Severus_-_Altes_Museum_-_Berlin_-_Germany_2017.jpg"
                    alt="Portrait of family of Septimius Severus"
                    className="rounded-lg shadow-lg sticky top-10 w-full"
                />
            </div>
        </div>
    );
}
