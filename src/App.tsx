import { useState, useEffect } from "react";
import "./App.css";
import Employees from "./Employees";
import Footer from "./Footer";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GroupedTeamMembers from "./GroupedTeamMembers";
import Nav from "./Navbar";
import NotFound from "./NotFound";

function App() {
  const [count, setCount] = useState(0);
  const [selectedTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "TeamB"
  );

  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employeeList")) || [
      {
        id: 1,
        fullName: "Bob Jones",
        destination: "Javascript",
        gender: "male",
        teamName: "TeamA",
      },
      {
        id: 12,
        fullName: "Bob Jasdasdones",
        destination: "Javascript",
        gender: "famale",
        teamName: "TeamA",
      },
      {
        id: 3,
        fullName: "Bobasdasdas Jones",
        destination: "Javascrasdasdadaipt",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 4,
        fullName: "sdasdasdasdasds",
        destination: "Javascriasdasdasdasdasdpt",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 5,
        fullName: "asdasdasdasdnes",
        destination: "Javascaaaaaaaaaaaaaaaaipt",
        gender: "famele",
        teamName: "TeamB",
      },
      {
        id: 5,
        fullName: "asdasdasdasdnes",
        destination: "Javascaaaaaaaaaaaaaaaaipt",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 5,
        fullName: "asdasdasdasdnes",
        destination: "Javascaaaaaaaaaaaaaaaaipt",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 5,
        fullName: "asdasdasdasdnes",
        destination: "Javascaaaaaaaaaaaaaaaaipt",
        gender: "famale",
        teamName: "TeamB",
      },
      {
        id: 5,
        fullName: "asdasdasdasdnes",
        destination: "Javascaaaaaaaaaaaaaaaaipt",
        gender: "male",
        teamName: "TeamD",
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  function handleTeamSelectionChange(event: any) {
    setTeam(event.target.value);
  }

  function handleEmployeeCardClick(event: any) {
    const transformedEmplotees = employees.map((employee: any) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    setEmployees(transformedEmplotees);
  }

  return (
    <Router>
      <Nav />
      <Header
        selectedTeam={selectedTeam}
        TeammemberCount={
          employees.filter(
            (employee: any) => employee.teamName === selectedTeam
          ).length
        }
      />
      <Routes>
        <Route
          path="/"
          element={
            <Employees
              employees={employees}
              selectedTeam={selectedTeam}
              handleEmployeeCardClick={handleEmployeeCardClick}
              handleTeamSelectionChange={handleTeamSelectionChange}
            />
          }
        ></Route>
        <Route
          path="/GroupedTeamMembers"
          element={
            <GroupedTeamMembers
              employees={employees}
              selectedTeam={selectedTeam}
              setTeam={setTeam}

            />
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
