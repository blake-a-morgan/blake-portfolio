import Link from "./Link";

function Sidebar(){
    const links = [
        {label: 'About Me', path: '/'},
        {label: 'Resume',path: '/resume'},
        {label: 'Other Projects',path: '/other-proj'},
        {label: 'Extra Info About This Project',path: '/extra-info'},
    ];

    const renderedLinks = links.map((link) => {
        return <Link key={link.label} to={link.path} className="mb-3"
        activeClassName="font-bold border-l-4 pl-2">
            {link.label}
            </Link>
    });

    return (
        <div className="bg-gray-300 sticky pl-2 pr-5 top-0 flex overflow-y-auto flex-col items-start border-4 border-black ">
            {renderedLinks}
        </div>
    )
}

export default Sidebar;