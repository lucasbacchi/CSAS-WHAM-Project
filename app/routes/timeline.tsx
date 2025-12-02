import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import type { Route } from "../../.react-router/types/app/routes/+types/home";
import { NavLink } from "react-router";
import type { ReactElement } from "react";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Timeline of Roman Britain" },
        {
            name: "timeline",
            content: "Timeline that simply details how Roman Britain evolved"
        }
    ];
}

export default function Timeline() {
    const events: Array<{
        date: string;
        title: string;
        subtitle: string;
        content: string;
        link?: string;
    }> = [
        {
            date: "Before 43 CE",
            title: "Pre-Roman Britain",
            subtitle: "From around 900,000 years ago to 43 CE.",
            content:
                "During this period there were large independent tribal groups which were led by powerful kings and queens. These tribal groups maintained their own territories and resources.",
            link: "https://www.english-heritage.org.uk/learn/story-of-england/prehistory/"
        },
        {
            date: "55 BCE",
            title: "First Contact",
            subtitle: "Caesarian Incursions 55 and 54 BCE.",
            content:
                "Julius Caesar took two expeditionary forces into early Britain. During these incursions the Romans gained knowledge of the valuable resources found in southern Britain. They eventually negotiated a peace deal which advantaged the Romans. This led to the development of political and trading relationships amount some of the southern tribes and Rome though the northern tribes were largely wary and opposed.",
            link: "https://www.english-heritage.org.uk/learn/story-of-england/romans/romans-introduction/"
        },
        {
            date: "43 CE",
            title: "Claudius Invasion",
            subtitle: "Emperor Claudius began his rule and invasion.",
            content:
                "Emperor Claudius began his rule and was looked down upon because he was slightly deaf and had a limp. Seeking to overcome his natural shortcomings he would pick up the plans of his murdered predecessor and continue the previous invasion preparations. This action would solidify his rule. On the back of the previous invasion preparations and its failures Claudius would find glory with a successful invasion. There were 2 major battles.",
            link: "https://www.english-heritage.org.uk/learn/story-of-england/romans/invasion/"
        },
        {
            date: "200",
            title: "Roman Rule Established",
            subtitle: "Londinium or London was established in this time.",
            content:
                "During the Romanization of Britain the populace would begin living in urban settlements and towns. Place more here later",
            link: "https://www.english-heritage.org.uk/learn/story-of-england/romans/daily-life/"
        },
        {
            date: "300",
            title: "Scotland Occupation Attempt",
            subtitle: "The scots",
            content: "summary / bullet list"
        },
        {
            date: "400",
            title: "End of Roman Rule",
            subtitle: "no more Romans",
            content: "summary / bullet list"
        },
        {
            date: "500",
            title: "Post Roman Period",
            subtitle: "All roads lead to London",
            content: "summary / bullet list"
        }
    ];

    const contentStyle = {
        background: "rgba(33,150,243,0.56)",
        color: "#fff"
    } as const;
    const contentArrowStyle = {
        borderRight: "7px solid  rgb(33, 150, 243)"
    } as const;
    const iconStyle = { background: "rgb(96,22,158)", color: "#fff" } as const;

    return (
        <main>
            <h1 className="flex justify-center text-3xl p-6">
                A Brief Timeline Of Roman History
            </h1>
            <div className="mt-6 flex flex-wrap gap-3 text-xl">
                <VerticalTimeline>
                    {events.map((event) => (
                        <VerticalTimelineElement
                            key={`${event.date}-${event.title}`}
                            className={`vertical-timeline-element--${event.date}`}
                            date={event.date}
                            iconStyle={iconStyle}
                            contentStyle={contentStyle}
                            contentArrowStyle={contentArrowStyle}
                        >
                            <h3
                                className={
                                    "vertical-timeline-element-title text-xl" +
                                    (event.link ? " hover:underline" : "")
                                }
                            >
                                {event.link ? (
                                    <a href={event.link}>{event.title}</a>
                                ) : (
                                    event.title
                                )}
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                {event.subtitle}
                            </h4>
                            <p>{event.content}</p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
            <div className="flex flex-wrap gap-3 text-xl justify-center m-8">
                <NavLink
                    to="/"
                    className="inline-block rounded-full border border-gray-200 text-white px-4 py-2 text-sm hover:opacity-90"
                >
                    Take me home
                </NavLink>
            </div>
        </main>
    );
}
