const Header = () => {
    return (
      <div className="flex justify-between items-center bg-white h-16 p-4 shadow-md">
        <div className="text-2xl font-bold">Dashboard</div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-md"
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">
            Log Out
          </button>
        </div>
      </div>
    );
  };
  
  export default Header;
  