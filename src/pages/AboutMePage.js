import cert from '../files/Blake-cert.jpg'

function AboutMePage(){
    return <div className="pr-5 pl-5 text-2xl bg-gray-300 ">
        <h2>About me:</h2>
        <div>
            <p className="text-base">Hello, I am Blake Morgan. I graduated in 2018, and have been working in the technology space since 2019. At first I wanted to go into DBA and Mainframes, but over the last few months I've moved towards wanting to do front end/ full stack development. I took some time to re-learn some of the front end stuff I learned in the past by taking an online course by Stephen Grider on Udemy. That course was 'Modern React with Redux'. Here is the certificate that came with the completing the course:</p>
            <div className='flex justify-center items-center'>
            <img className='items-center border-2 border-black' alt="Certificate of React" src={cert} width="500" height="500"/>
            </div>
            <p className='text-base'>I also have tons of interests outside of my profession. I try to play tennis and pickeball with friends regularly. I've also been wanting to try out badminton with my wife, but have not had the chance to try it yet. Also love trying new restaurants, arcades, and bowling. I am also a big nerd, and love online gaming. Been trying to get back into reading lately and, fortunately, think I found the series to bring me back to it. That series being the Star Wars High Republic novel series, that I just started.</p>
        </div>
    </div>
}

export default AboutMePage;