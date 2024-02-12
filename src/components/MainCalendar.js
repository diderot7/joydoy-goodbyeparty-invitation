import React, { useState } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import MainHeader from "./MainHeader";

const MainCalendar = () => {
  const [date, SetDate] = useState(new Date("2024-02-24"));
  const [currentDate, SetCurrentDate] = useState(new Date());
  return (
    <div className="MainCalendar">
      <FullCalendar
        plugins={[dayGridPlugin]}
        headerToolbar={{
          left: "prev",
          center: `title`,
          right: "next",
        }}
        initialView="dayGridMonth"
        dayMaxEvents={true}
        events={[
          {
            title: "🎉party!!!🎉",
            start: "2024-02-24",
            end: "2024-02-24",
            color: "#b1aee5",
          },
        ]}
        height={"500px"}
        editable={true}
      />
      <MainHeader
        text={`도련님 굿바이파티까지 ${
          date.getDate() - currentDate.getDate()
        }일 남았습니다. `}
      />
    </div>
  );
};

export default MainCalendar;
