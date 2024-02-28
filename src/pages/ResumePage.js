
function ResumePage(){
    return <div className="pr-5 pl-5 items-center bg-gray-300">
        <h2 className="items-center text-2xl font-semibold">Resume:</h2>
        <p>This will update every time I update it live.</p>
        <div className="flex items-center justify-center">
            <iframe className="items-center justify-center" title="Resume" height={1620} width={1080} src="https://docs.google.com/document/d/1C7nrSqRPDRoUKG7BvYBsOeeCVPuHXjmo" alt="My resume" />
        </div>
    </div>
}

export default ResumePage;