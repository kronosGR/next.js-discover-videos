const NavBar = (props) => {
  const { username } = props;
  return (
    <div>
      NavBar <p>{username}</p>
      <ul>
        <li>Home</li>
        <li>List</li>
      </ul>
      <nav>
        <div>
          <button>
            <p>{username}</p>
            <div>
              <a>Sign out</a>
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
