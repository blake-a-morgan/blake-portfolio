
function ResumePage(){
    return <div className=" bg-gray-300">
        <h2 className="text-2xl">Resume:</h2>
        <p>This will update every time I update it live</p>
        <iframe title="Resume" height={1620} width={1080} src="https://docs.google.com/document/d/1C7nrSqRPDRoUKG7BvYBsOeeCVPuHXjmo" alt="My resume" />
    </div>
}

export default ResumePage;