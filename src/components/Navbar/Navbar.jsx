export const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between px-8 py-4 bg-blue-400">
        <span>Home</span>
        <div className="w-[50%] ">
          <input type="text" className="w-full border pl-1 rounded-sm" />
        </div>
        <div>Cart</div>
      </div>
    </nav>
  );
};
