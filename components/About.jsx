import React from 'react'

const About = () => {
  return (




    <div className = "w-full md:h-screen p-2 flex items-center py-16 z-[10]" >
        <div className = "max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 z-[10]" >
            
            <div className = "col-span-2" >
                <p className='uppercase text-xl tracking-widest text-[#5651e5]' style={{ marginTop: '50px' }}>About</p>
                <h2 className = "p-2">Who I Am</h2>
                <p className = "p-2 text-gray-600">
                Hello! I am a diligent programmer currently advancing my knowledge at the Faculty of Electrical Engineering and Informatics (FEI) at the Technical University of Košice, with a specialization in Intelligent Systems. My academic journey has honed my abilities in various programming languages including C#, C, Python, JavaScript, JSX, and CSS, allowing me to tackle a multitude of software development challenges.
                I have a particular passion for game and interactive media development, with a solid background in utilizing the Unity Engine to bring imaginative concepts to life. Besides, my academic specialization has empowered me to delve into the realm of Artificial Intelligence (AI). I have been engrossed in developing, training, and optimizing various neural networks using frameworks like PyTorch and TensorFlow. The blend of AI and game development has propelled me to explore the untapped potential of Intelligent Systems in creating more responsive and immersive gaming experiences.
                I am a staunch believer in open-source contributions and community-driven learning. You can trace my development journey and explore my projects on my GitHub profile. The array of projects showcased, reflect my continuous endeavor to learn, innovate, and contribute to the ever-evolving field of software engineering. Through my academic and personal projects, I strive not only to augment my understanding but also to collaborate with like-minded individuals, aiming to leave a lasting imprint on the tech community.
                I am always open to engaging in insightful discussions, collaborating on intriguing projects, and embracing new learning opportunities that come my way.
                Please replace "your_username" with your actual GitHub username in the link provided. This draft aims to encapsulate your academic background, skills, and passion for programming and AI, while also inviting collaborations and interactions from the community.
                </p>
            </div>


            <div className='w-auto h-auto m-auto shadow-xl shadow-gray-900 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 '>
                <img className='rounded-xl' src="/assets/images/profile_image.png" alt='/'/>
            </div>

        </div>

    </div>
  
  
    )
}

export default About