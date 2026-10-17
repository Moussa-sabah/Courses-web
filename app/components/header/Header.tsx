
import LogoAndSearch from "./LogoAndSearch";
import NavigationLinks from "./NavigationLinks";
import NotificationsAndAccount from "./NotificationsAndAccount";



export default function Header() {
    return (
        <header className="border-b border-line pt-5  w-full   px-5 md:px-7 lg:px-10 flex flex-col gap-7 md:gap-10  justify-between">
            <div className="flex items-center justify-between">
                <LogoAndSearch />
                <NotificationsAndAccount />
            </div>
            <NavigationLinks />
        </header>
    )
}
