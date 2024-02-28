import MediaPic from '../files/MediaAppPicture.PNG'
function OtherProjects(){
    return <div className="bg-gray-300 ">
        <h2 className="flex text-2xl justify-center items-center font-semibold ">Other projects</h2>
            <h3 className="text-lg font-semibold">Projects during React Udemy Course</h3>
                <h4 className='font-semibold'>User Photo Album App:</h4>
                    <p className='text-base'>This is an app that lets you add random named users using faker. It then allows a photo album to be added to each user using faker to generate an album name. Then in each album you can add random photos (using faker). It stores all of this in a json-server database. And updates when new items are added to the server. This functionality is primarily done by redux, however for the users I used thunks rather than builder mutations. You are also able to delete users, photos, and albums.     </p>
                    <p className='text-base'>Git Hub repo: <a className="text-blue-800" href="https://github.com/blake-a-morgan/media"> https://github.com/blake-a-morgan/media</a> </p>
                    <img  src={MediaPic} alt='Media App' />
                    <br></br>
                <h4 className='font-semibold'>Books App:</h4>

    </div>
}

export default OtherProjects;