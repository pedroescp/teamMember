const Header = ({ selectedTeam, TeammemberCount }) => {
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1 className="mt-4 p5 rounded text-center">
            Team Member Allocation
          </h1>
          <h3 className="text-center">
            {selectedTeam} has a {TeammemberCount} members!
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
