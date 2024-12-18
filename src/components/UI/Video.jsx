
const Video = () => {
    return (
        <div>
            <video autoPlay loop muted className='w-full lg:h-[700px] md:h-[362px] h-[218px] object-cover'>
                <source src="https://gunpowderinnovations.s3.eu-west-2.amazonaws.com/videos/gunpowderinnovations.mp4" type="video/mp4" />
            </video>
        </div>
    )
}
export default Video

