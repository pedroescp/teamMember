import { useState } from "react";

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {
  const [groupEmployees, setGroupedData] = useState(groupedTeamMembers());

  function groupedTeamMembers() {
    var team = []

    var teamAMember = employees.filter((employee) => employee.teamName === 'TeamA')
    var teamA = {team:'TeamA'}
  }

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-4 text-center">
        <div className="col-8">
          <h1>GroupedTeamMembers</h1>
        </div>
      </div>
    </main>
  );
};
export default GroupedTeamMembers;
