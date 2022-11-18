import { UserDefault, UserWoman } from "./components/icons";



const Employees = ({
  employees,
  selectedTeam,
  handleEmployeeCardClick,
  handleTeamSelectionChange,
}) => {
  return (
    <main className="container">
      <div className="row justify-content-center mb-3 mt-3">
        <div className="col-6">
          <select
            name=""
            id=""
            className="form-select form-select-lg"
            value={selectedTeam}
            onChange={handleTeamSelectionChange}
          >
            <option value="TeamA">Team A</option>
            <option value="TeamB">Team B</option>
            <option value="TeamC">Team C</option>
            <option value="TeamD">Team D</option>
          </select>
        </div>
        <div className="col-8">
          <div className="card-collection">            
            {employees.map((employee:any) => (              
              <div
              key={employee.id}
                id={employee.id}
                className={
                  employee.teamName === selectedTeam
                    ? "card m-2 standout"
                    : "card m-2"
                }
                style={{ cursor: "pointer" }}
                onClick={handleEmployeeCardClick}
              >
                {employee.gender === "male" ? <UserWoman /> : <UserDefault />}

                <div className="card-body">
                  <h5 className="card-title">Full Name: {employee.fullName}</h5>
                  <p className="card-text">
                    Designition: {employee.destination}
                  </p> 
                </div>
                <div card-title></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Employees;
