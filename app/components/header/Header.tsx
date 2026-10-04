
import LogoAndSearch from "./LogoAndSearch";
import NavigationLinks from "./NavigationLinks";
import NotificationsAndAccount from "./NotificationsAndAccount";



export default function Header() {
    return (
        <header className="border-b border-line pt-5  w-full h-2/12 px-20 flex flex-col gap-6  justify-between">
            <div className="flex items-center justify-between">
                <LogoAndSearch />
                <NotificationsAndAccount />
            </div>
            <NavigationLinks />
        </header>
    )
}
