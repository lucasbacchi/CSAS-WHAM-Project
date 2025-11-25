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
    return (
        <main>
            <div className="mt-6 flex flex-wrap gap-3">
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
                        date="001"
                        iconStyle={{
                            background: "rgb(96,22,158)",
                            color: "#fff"
                        }}
                        //icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Pre Roman Britain
                        </h3>

                        <h4 className="vertical-timeline-element-subtitle">
                            Context (if needed)
                        </h4>

                        <p>Some information</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="000"
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
                        <h3 className="vertical-timeline-element-title">
                            First Contact
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Caesarian Incursions
                        </h4>
                        <p>summary / bullet list</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="100"
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
                        <h3 className="vertical-timeline-element-title">
                            Claudius Invasion
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            2 battles
                        </h4>
                        <p>summary / bullet list</p>
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
                        <h3 className="vertical-timeline-element-title">
                            Roman Rule Established
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Londinium
                        </h4>
                        <p>summary / bullet list</p>
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
                        <h3 className="vertical-timeline-element-title">
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
                        <h3 className="vertical-timeline-element-title">
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
                        <h3 className="vertical-timeline-element-title">
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
