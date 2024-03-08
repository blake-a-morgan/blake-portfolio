import WireFrame from '../files/ProjectWireframe.PNG';

function ExtraInfoPage(){
    return (
    <div className="bg-gray-300 ">
        <h2 className="flex text-2xl justify-center items-center font-semibold">More about this project:</h2>
        <p className="text-base">My goal for this project was to start something from nothing. I also wanted something that was about me, and the other projects I have worked on. So I first started of by making extremely simple wireframes. I then added what pages I thought I would be making, although the pages changed since. I tried to figure out if there would be any way to implement state, or complexity, but it didn't really seem like there's a reason to over complicate a page like this. </p>
        <div className='flex items-center justify-center'>
            <img  src={WireFrame} alt="Project wireframe"/>
        </div>
    </div>
    )
}

export default ExtraInfoPage;