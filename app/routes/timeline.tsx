import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import type { Route } from "../../.react-router/types/app/routes/+types/home";
import { NavLink } from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Timeline of Roman Britain" },
        {
            name: "timeline",
            content: "Timeline that simply details how Roman Britain evolved"
        }
    ];
}

export default function timeline() {
    const divStyle = {
        display: "flex",
        justifyContent: "center",
        paddingBottom: "20px"
    };
    const h1Style = {
        display: "flex",
        justifyContent: "center",
        fontSize: "30px",
        paddingTop: "20px"
    }
    const h3Style = {fontSize: "20px"};
    return (
        <main>
            <h1 style={h1Style} >A Brief Timeline Of Roman History</h1>
            <div style={divStyle} className="mt-6 flex flex-wrap gap-3">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: "rgba(33,150,243,0.56)",
                            color: "#fff"
                        }}
                        contentArrowStyle={{
                            borderRight: "7px solid  rgb(33, 150, 243)"
                        }}
                        date="Before 43 CE"
                        iconStyle={{
                            background: "rgb(96,22,158)",
                            color: "#fff"
                        }}
                        //icon={<WorkIcon />}
                    >
                        <h3 style={h3Style} className="vertical-timeline-element-title">
                            <a href={"https://www.english-heritage.org.uk/learn/story-of-england/prehistory/"}>
                                Pre-Roman Britain
                            </a>
                        </h3>

                        <h4 className="vertical-timeline-element-subtitle">
                            From around 900,000 years ago to 43 CE.
                        </h4>

                        <p>During this period there were large independent tribal groups which were led by powerful kings and queens. These tribal groups maintained their own territories and resources.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="55 BCE"
                        iconStyle={{
                            background: "rgb(96,22,158)",
                            color: "#fff"
                        }}
                        contentStyle={{
                            background: "rgba(33,150,243,0.56)",
                            color: "#fff"
                        }}
                        //icon={<WorkIcon />}
                    >
                        <h3 style={h3Style} className="vertical-timeline-element-title">
                            <a href={"https://www.english-heritage.org.uk/learn/story-of-england/romans/romans-introduction/"}>
                                First Contact
                            </a>

                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Caesarian Incursions 55 and 54 BCE.
                        </h4>
                        <p>Julius Caesar took two expeditionary forces into early Britain. During these incursions the Romans gained knowledge of the valuable resources found in southern Britain.
                            They eventually negotiated a peace deal which advantaged the Romans. This led to the development of political and trading relationships amount some of the southern tribes and Rome
                            though the northern tribes were largely wary and opposed.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="43 CE"
                        iconStyle={{
                            background: "rgb(96,22,158)",
                            color: "#fff"
                        }}
                        contentStyle={{
                            background: "rgba(33,150,243,0.56)",
                            color: "#fff"
                        }}
                        //icon={<WorkIcon />}
                    >
                        <h3 style={h3Style} className="vertical-timeline-element-title">
                            <a href={"https://www.english-heritage.org.uk/learn/story-of-england/romans/invasion/"}>
                                Claudius Invasion
                            </a>
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Emperor Claudius began his rule and invasion.
                        </h4>
                        <p>
                            Emperor Claudius began his rule and was looked down upon because he was slightly deaf and had a limp. Seeking to overcome his natural shortcomings he would pick up the plans of his murdered predecessor and continue the previous invasion preparations.
                            This action would solidify his rule. On the back of the previous invasion preparations and its failures Claudius would find glory with a successful invasion. There were 2 major battles.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="200"
                        iconStyle={{
                            background: "rgb(96,22,158)",
                            color: "#fff"
                        }}
                        contentStyle={{
                            background: "rgba(33,150,243,0.56)",
                            color: "#fff"
                        }}
                        //icon={<WorkIcon />}
                    >
                        <h3 style={h3Style} className="vertical-timeline-element-title">
                            <a href={"https://www.english-heritage.org.uk/learn/story-of-england/romans/daily-life/"}>
                                Roman Rule Established
                            </a>
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Londinium or London was established in this time.
                        </h4>
                        <p>
                            During the Romanization of Britain the populace would begin living in urban settlements and towns. Place more here later
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="300"
                        iconStyle={{
                            background: "rgb(96,22,158)",
                            color: "#fff"
                        }}
                        contentStyle={{
                            background: "rgba(33,150,243,0.56)",
                            color: "#fff"
                        }}
                        //icon={<SchoolIcon />}
                    >
                        <h3 style={h3Style} className="vertical-timeline-element-title">
                            Scotland Occupation Attempt
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            The scots
                        </h4>
                        <p>summary / bullet list</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="400"
                        iconStyle={{
                            background: "rgb(96,22,158)",
                            color: "#fff"
                        }}
                        contentStyle={{
                            background: "rgba(33,150,243,0.56)",
                            color: "#fff"
                        }}
                        //icon={<SchoolIcon />}
                    >
                        <h3 style={h3Style} className="vertical-timeline-element-title">
                            End of Roman Rule
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            no more Romans
                        </h4>
                        <p>summary / bullet list</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="500"
                        iconStyle={{
                            background: "rgb(96,22,158)",
                            color: "#fff"
                        }}
                        contentStyle={{
                            background: "rgba(33,150,243,0.56)",
                            color: "#fff"
                        }}
                        //icon={<SchoolIcon />}
                    >
                        <h3 style={h3Style} className="vertical-timeline-element-title">
                            Post Roman Period
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            All roads lead to London
                        </h4>
                        <p>summary / bullet list</p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
            <div className="mt-6 flex flex-wrap gap-3" style={divStyle}>
                <a className="inline-block rounded-full border border-gray-200 text-white px-4 py-2 text-sm hover:opacity-90">
                    <NavLink to={"/"}>Take me back</NavLink>
                </a>
            </div>
        </main>
    );
}
