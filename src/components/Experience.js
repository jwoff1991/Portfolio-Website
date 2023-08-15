import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023-Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon></SchoolIcon>}
        >
          <h3 className="vertical-timeline-element-title">App Academy</h3>
          <h4>Full Stack Software Engineering</h4>
          <p>
            Jumped head first into an emmersive 24 week bootcamp covering
            various technologies and coding principles
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022-2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkHistoryIcon></WorkHistoryIcon>}
        >
          <h3 className="vertical-timeline-element-title">JBS Solutions</h3>
          <h4>Talent Aquisition</h4>
          <p>
            Solidified passion for software engineering working closly witht the
            development team
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020-2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkHistoryIcon></WorkHistoryIcon>}
        >
          <h3 className="vertical-timeline-element-title">Collabera</h3>
          <h4>Account Manager - Direct Hire</h4>
          <p>
            Found a passion within the technology space through ample encounters
            with software engineers
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019-2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkHistoryIcon></WorkHistoryIcon>}
        >
          <h3 className="vertical-timeline-element-title">Bisco Industries</h3>
          <h4>Business Development Specialist</h4>
          <p>Developed skills needed to work effectly in a team environment</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018-2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon></SchoolIcon>}
        >
          <h3 className="vertical-timeline-element-title">
            Cal State Fullerton
          </h3>
          <h4>B.S. In Marketing, Minor in Sales</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
