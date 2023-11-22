export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-6 md:px-12 xl:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="md:order-2">
                        <img
                            className="h-80 w-80 md:h-96 md:w-96 rounded-full object-cover mx-auto"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5-XYEzOsCACPl76bz_IwqYfFsAn5yqIOatg&usqp=CAU"
                            alt="eBooks Logo"
                        />
                    </div>
                    <div className="md:order-1">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Welcome to Ebooks
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            At Ebooks, we are passionate about unlocking the power of knowledge and storytelling. Our mission is to provide a digital haven for bibliophiles, where imagination meets information, and the world of books is at your fingertips.

                            Our extensive library boasts a diverse collection of ebooks spanning genres and themes. Whether you seek heart-pounding adventures, thought-provoking narratives, or guides to enhance various aspects of your life, we have something to captivate every reader.
                            <br/>
                            <br/>

                            <span className="font-semibold">What Sets Us Apart:</span> <br/>
                            We pride ourselves on creating a seamless and user-friendly experience. Our platform is designed to empower readers to effortlessly explore, discover, and indulge in their literary passions. From curated recommendations to personalized reading lists, we aim to enhance your reading journey.

                            <span className="font-semibold block mt-4">Our Community:</span>
                            EBooks isn't just a library; it's a thriving community. Engage in lively discussions, share your favorite reads, and connect with fellow book enthusiasts. We believe in fostering a space where ideas flourish and conversations spark new discoveries.

                            <span className="font-semibold block mt-4">Our Commitment:</span>
                            We're committed to supporting authors and promoting diverse voices. We strive to highlight emerging talents while celebrating established writers, ensuring our readers encounter a rich tapestry of perspectives and stories.

                            Embark on a journey with EBooks, where every page turned unveils new worlds, sparks creativity, and enriches your life.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
