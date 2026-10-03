


export default function Navigation_links() {
    return (
        <nav className="text-sm flex gap-5  text-secondary   ">
            <p className="pb-2 cursor-pointer">Home</p>
            <p className="text-primary border-b-2 pb-2 cursor-pointer">Courses</p>
            <p className="pb-2 cursor-pointer">Catalog</p>
            <div className="pb-2 cursor-pointer flex items-center gap-2">
                <p>Favorites</p>
                <p className="bg-zinc-200 text-primary w-4 h-4 flex items-center justify-center  text-xs rounded-sm font-semibold">1</p></div>
        </nav>
    )
}
