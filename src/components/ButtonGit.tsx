import { GithubLogo } from "phosphor-react";

export function ButtonGit() {
  return (
    <form action="https://github.com/Cadu-or" target="_blank">
      <button
        type="submit"
        className="py-2 px-4 bg-mgreen-700 rounded-md border-transparent flex justify-between space-x-1 items-center text-sm hover:bg-mgreen-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-mgreen-500 transition-colors disabled:hover:bg-brand-500 disabled:opacity-50"
      >
        <GithubLogo weight="fill" className="w-5 h-5" alt="Logo do Github" />
        <span> GitHub </span>
      </button>
    </form>
  )
}