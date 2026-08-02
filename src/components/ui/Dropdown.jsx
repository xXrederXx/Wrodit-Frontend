export default function Dropdown() {
  return (
    <div className=" flex items-center justify-center font-sans p-8">
      <DropdownMenu
        trigger={
          <button className="px-5 py-2 text-sm font-semibold text-zinc-800 dark:text-zinc-100 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-sm hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors">
            Open Menu
          </button>
        }>
        <div className="flex flex-col space-y-1">
          <DropdownMenuItem onClick={() => console.log("Profile clicked")} active={true}>
            <User className="mr-3 h-5 w-5 text-zinc-500" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => console.log("Community clicked")}>
            <Community className="mr-3 h-5 w-5 text-zinc-500" />
            <span>Community</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => console.log("Subscription clicked")}>
            <Subscription className="mr-3 h-5 w-5 text-zinc-500" />
            <span>Subscription</span>
            <span className="ml-auto text-xs font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full px-2 py-0.5">
              PRO
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => console.log("Settings clicked")}>
            <Settings className="mr-3 h-5 w-5 text-zinc-500" />
            <span>Settings</span>
          </DropdownMenuItem>
        </div>
        <DropdownMenuSeparator />
        <div className="flex flex-col space-y-1">
          <DropdownMenuItem onClick={() => console.log("Help Center clicked")}>
            <HelpCenter className="mr-3 h-5 w-5 text-zinc-500" />
            <span>Help center</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => console.log("Sign Out clicked")}>
            <SignOut className="mr-3 h-5 w-5 text-zinc-500" />
            <span>Sign out</span>
          </DropdownMenuItem>
        </div>
      </DropdownMenu>
    </div>
  );
}
