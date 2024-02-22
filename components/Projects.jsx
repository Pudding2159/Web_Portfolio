import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProjectItems from 'components/ProjectItems'
import Tello from 'public/assets/images/Tello.jpg'
import Bagging_algoritm from 'public/assets/images/NN.png'
import Unity from 'public/assets/images/Unity.gif'


const Projects = () => {
    return (


        <div className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Project
                </p>
                <h2 className="py-4" >What I've Build</h2>
                <div className="grid md:grid-cols-2 gap-8">


              
                <ProjectItems
                title_1 = 'Drone-Face-Tracking-and-Photo-Classification-with-Tello's
                title_2 = 'PyTorch'
                backgraundImg = {Tello}
                projectUrl = 'https://github.com/Pudding2159/Drone-Face-Tracking-and-Photo-Classification-with-Tello'
                />

                

                <ProjectItems
                title_1 = 'Simple Unity Game's
                title_2 = 'Welcome to my Unity game project'
                backgraundImg = {Unity}
                projectUrl = 'https://github.com/Pudding2159/Unity-2D-Simple-Mobile-Game'
                />

                <ProjectItems
                title_1 = 'Bagging Algorithm for Neural-Networks's
                title_2 = 'Sklearn'
                backgraundImg = {Bagging_algoritm}
                projectUrl = 'https://github.com/Pudding2159/Bagging-Algorithm-for-Neural-Networks'
                />




                
                </div>
            </div>
        </div>
    )
}

export default Projects