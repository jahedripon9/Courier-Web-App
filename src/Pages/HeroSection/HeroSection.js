import React from 'react';

const HeroSection = () => {
    return (
        <div>
            <section class="text-gray-600 body-font ">
                <div class="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mx-10">
                        <span><button className='bg-yellow-400 py-1 px-5 text-white mr-4 font-bold rounded-xl border-solid border-2 border-white	'>Parcel</button>
                        <button className='bg-yellow-400 py-1 px-8  text-white font-bold rounded-xl '>Food</button></span>
                    <h1 class="title-font sm:text-7xl text-3xl mb-4 font-medium text-gray-900">Fast Responses 
                    <br /> Fast Delivery</h1>
                    <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    <div class="flex justify-center">
                        
                        <button class="ml-4 inline-flex text-white font-bold  border-0 py-2 px-6 focus:outline-none rounded text-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Book a Delivery</button>
                    </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-yellow-400 rounded-2xl -mt-20">
                    <img class="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/njJTXCh/Delivery.png"/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;