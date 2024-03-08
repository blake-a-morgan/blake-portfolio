import MediaPic from '../files/MediaAppPicture.PNG';
import ReadList from '../files/Reading List app Pic.PNG';
function OtherProjects(){
    return <div className="bg-gray-300 ">
        <h2 className="flex text-2xl justify-center items-center font-semibold ">Other projects</h2>
            <h3 className="text-lg font-semibold">Projects during React Udemy Course</h3>
                <p className='text-base'>These Projects were projects that I worked on during the Udemy Course.</p>
                <h4 className='font-semibold'>User Photo Album App:</h4>
                    <p className='text-base'>This is an app that lets you add random named users using faker. It then allows a photo album to be added to each user using faker to generate an album name. Then in each album you can add random photos (using faker). It stores all of this in a json-server database. And updates when new items are added to the server. This functionality is primarily done by redux, however for the users I used thunks rather than builder mutations. You are also able to delete users, photos, and albums.  </p>
                    <p className='text-base'>Git Hub repo: <a className="text-blue-800" href="https://github.com/blake-a-morgan/media"> https://github.com/blake-a-morgan/media</a> </p>
                    <img  src={MediaPic} alt='Media App' />
                    <br></br>
                <h4 className='font-semibold'>Reading List App:</h4>
                    <p className='text-base'>The reading List app is an app that allows the user to add Custom named books to a reading list. The app allows you to edit the titles after creation, and delete the books when you are ready to. The app generates a random picture using faker. The main focus of this app was the state management of the books list. Creating a new hook and context for books, made maintaining the state and its functions much more manageable. The books were all stored in a json db server. </p>
                    <p className='text-base'>Git Hub repo: <a className='text-blue-800' href="https://github.com/blake-a-morgan/books">https://github.com/blake-a-morgan/books</a></p>
                    <img src={ReadList} alt='Reading List App'/>
            <h3 className='"text-lg font-semibold'>Projects after React Udemy Course</h3>
                <p className='text-base'>These proejcts were something that I decided to take on after the course. I used this website to find some ideas: <a className='text-blue-800' href='https://www.knowledgehut.com/blog/web-development/react-js-projects-for-beginners'>https://www.knowledgehut.com/blog/web-development/react-js-projects-for-beginners</a>, but then went on to just make the projects entirely from scratch.</p>
    </div>
}

export default OtherProjects;