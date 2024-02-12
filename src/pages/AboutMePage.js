import cert from '../files/Blake-cert.jpg'

function AboutMePage(){
    return <div className="text-2xl bg-gray-300 ">
        <h2>About me:</h2>
        <div>
            <p className="text-base">Hello, I am Blake Morgan. I graduated in 2018, and have been working in the technology space since 2019. At first I wanted to go into DBA and Mainframes, but over the last few months I've moved towards wanting to do front end/ full stack development. I took some time to realearn some of the front end stuff I learned in the past by taking an online course by Stephen Grider on Udemy. That course was 'Modern React with Redux'. Here is the certificate that came with the completing the course:</p>
            <div className='flex justify-center items-center'>
            <img className='items-center border-2 border-black' alt="Certificate of React" src={cert} width="500" height="500"/>
            </div>
        </div>
    </div>
}

export default AboutMePage;