export const defaultData = {
  tasks: [
    { id: 1, text: "Complete Mathematics Assignment", done: false },
    { id: 2, text: "Prepare Web Tech lab", done: false },
    { id: 3, text: "Revise Hashing concepts", done: true }
  ],
  notes: [
    { id: 1, title: "React Basics", body: "Components, Props, State, Hooks" },
    { id: 2, title: "DBMS Keys", body: "Primary, Foreign, Candidate, Composite" }
  ],
  exams: [
    { id: 1, title: "DSA Midterm", date: "2025-12-20" },
    { id: 2, title: "Web Tech Test", date: "2025-12-10" }
  ],
  attendance: {
    "2025-11-01": true,
    "2025-11-02": true,
    "2025-11-03": false
  },
  timetable: [
    { id: 1, day: "Monday", subject: "Data Structures", time: "10:00 AM" },
    { id: 2, day: "Tuesday", subject: "Web Technologies", time: "11:00 AM" }
  ],
  timerHistory: [
    { id: 1, minutes: 25, date: "2025-11-10", type: "pomodoro" }
  ]
};