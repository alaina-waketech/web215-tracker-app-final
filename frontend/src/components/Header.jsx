function Header({ user, onLogout }) {
  return (
    <div class="container m-3">
      <header>
        <h1>Task Tracker</h1>

        {user && (
          <div class="position-relative d-flex align-items-center justify-content-center p-2">
            <div class="">
              Welcome, <strong>{user.name}</strong>{" "}
            </div>

            <button
              onClick={onLogout}
              class="btn btn-primary position-absolute end-0"
            >
              Log Out
            </button>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
