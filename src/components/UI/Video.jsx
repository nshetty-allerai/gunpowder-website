
const Video = () => {
    return (
        <div>
            <video autoPlay loop muted className='w-full lg:h-[700px] md:h-[362px] h-[218px] object-cover'>
                <source src="https://buildit-product.s3.ap-south-1.amazonaws.com/gunpowder+innovation.mp4" type="video/mp4" />
            </video>
        </div>
    )
}
export default Video

