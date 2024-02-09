import Link from "./Link";

function Sidebar(){
    const links = [
        {label: 'About Me', path: '/'},
        {label: 'Resume',path: '/resume'},
        {label: 'Career Goals',path: '/career'},
        {label: 'Extra Info About This Project',path: '/extra-info'},
    ];

    const renderedLinks = links.map((link) => {
        return <Link key={link.label} to={link.path} className="mb-3"
        activeClassName="font-bold border-l-4 pl-2">
            {link.label}
            </Link>
    });

    return (
        <div className="sticky top-0 overflow-y-auto flex flex-col items-start">
            {renderedLinks}
        </div>
    )
}

export default Sidebar;