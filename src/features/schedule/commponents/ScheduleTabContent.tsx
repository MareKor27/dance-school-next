import useStyles from "@/hooks/useStyle";
import style from "./lessonPlan.module.scss";
import Link from "next/link";
import { SitePaths } from "@/constants/Paths";
import scheduleData from "@/data/scheduleData.json";
import { ContentRendererProps } from "@/features/common/tab-content/TabContent";

type ScheduleDataContent =
  (typeof scheduleData)[keyof typeof scheduleData]["data"];

export default function ScheduleTabContent(
  props: ContentRendererProps<ScheduleDataContent>
) {
  const s = useStyles(style);
  return (
    <div className={s("calledar")}>
      {props.content.map((roomData, roomIndex) => (
        <div key={roomIndex}>
          <h3 className="text-center">{roomData.room}</h3>
          {roomData.lessons.map((lesson, lessonIndex) => (
            <div className={s("lesson")} key={lessonIndex}>
              <div className={s("title-lesson")}>{lesson.title}</div>
              <div className={s("hours")}>{lesson.hours}</div>
              <div className={s("dificulty-level")}>{lesson.difficulty}</div>
              <div className={s("instructor")}>{lesson.instructor}</div>
              <div className={s("group-status")}>{lesson.groupStatus}</div>
              {"registration" in lesson && (
                <div>
                  <div className={s("registration")}>{lesson.registration}</div>
                  <Link href={SitePaths.CONTACT.absolute}>
                    <div className={s("sign-up-button")}>
                      {lesson.registrationButton}
                    </div>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
