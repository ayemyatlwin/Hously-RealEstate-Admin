import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from '@fullcalendar/list';
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CreateButton from "../Components/CreateButton";
import { INITIAL_EVENTS, createEventId } from "../utils/event-utils";
import Footer from "../Components/Footer";

const drawerWidth = 64;

const Calendar = () => {
  const [state, setState] = useState({
    currentEvents: []
  });
// console.log(state);

const handleDateSelect = (selectInfo) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const renderEventContent = (eventInfo) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  };

  const handleEventClick = (clickInfo) => {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  const events=[
    {
      title: 'Meeting',
      start: '2023-06-23T14:30:00',
      extendedProps: {
        status: 'done'
      }
    },
    {
      title: 'Birthday Party',
      start: '2023-06-25T07:00:00',
      backgroundColor: 'green',
      borderColor: 'green'
    }
  ]

  return (
    <Dashboard>
      {/* home section */}
      <div className={` w-[calc(100% - ${drawerWidth}px)] ml-[${drawerWidth}px] shadow-custom bg-[#FFF]`}>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center px-3 md:px-6  py-3 md:py-4">
          <div className=" capitalize text-[var(--text-color)] text-lg md:text-xl mt-[6px] md:mt-0">{/* w-80 */}
            calendar
          </div>
          <div className="flex justify-between items-center gap-3 ml-auto">
            <Breadcrumbs
              separator={
                <NavigateNextIcon
                  fontSize="small"
                  className=" text-[#8d97ad]"
                />
              }
              aria-label="breadcrumb"
            >
              <Link to={"/"}>
              <p className=" capitalize cursor-pointer text-[var(--text-color)] text-[13px]">
                home
              </p>
              </Link>
              <p className=" capitalize text-green-700 text-[13px]">
                calendar
              </p>
            </Breadcrumbs>
            <Link to={"/create"}>
              <CreateButton />
            </Link>
          </div>
        </div>
      </div>

      {/* calendar */}
      <div className="w-full px-3 md:px-6 py-6">
        <div className="grid grid-cols-1 gap-5">
          <div className="bg-white p-[10px] md:p-[20px]">
            <div className=" overflow-x-auto">
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                initialView={"dayGridMonth"}
                headerToolbar={{
                  start: "prev,next today",
                  center: "title",
                  end: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                }}
                events={events}
                eventDidMount={(info)=>{
                  
                    if (info.event.extendedProps.status === 'done') {

                      // Change background color of row
                      info.el.style.backgroundColor = 'red';
                
                      // Change color of dot marker
                      var dotEl = info.el.getElementsByClassName('fc-event-dot')[0];
                      if (dotEl) {
                        dotEl.style.backgroundColor = 'white';
                      }
                    }
                 
                }}
               
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true} //+1More
                initialEvents={INITIAL_EVENTS}

                select={handleDateSelect} //add
                eventContent={renderEventContent}
                
                eventClick={handleEventClick} //delete

                // height={"80vh"}
              />
            </div>
          </div>
        </div>
      </div>

      {/* footer section */}
      <Footer/>
    </Dashboard>
  );
};

export default Calendar;
