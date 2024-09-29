import React from 'react';
import earth from '../assets/earth.png'

const StatsPage = () => {
    return (
        <div className="flex h-full w-full">
            <div className="grid grid-cols-2 gap-4 justify-evenly w-full h-full">
                <div>
                    <h1 className="pt-8 text-5xl font-bold text-midnight">did you know...</h1>
                    <h1 className="pt-8 w-2/3 text-midnight">nearly a <span className="font-bold">fifth</span> of food produced for human consumption is lost or wasted globally. this amounts to: </h1>
                </div>
                <div className="text-midnight text-right">
                    <h1 className="text-midnight text-right">up to</h1>
                    <h1 className="pt-2 italic text-4xl font-bold text-dark-teal text-right">10% of global greenhouse gas</h1>
                    <h1 className="italic text-4xl font-bold text-dark-teal text-right">emissions</h1>
                    <h1 className="pt-4 text-midnight text-right">almost <span className="font-bold">five times</span> the total emissions of</h1>
                    <h1 className="text-midnight text-right">the aviation sector</h1>
                </div>
                <div>
                    <h1 className="italic pt-8 text-4xl font-bold text-dark-purple">1.005 billion tonnes</h1>
                    <h1 className="pt-4 text-midnight">of food waste generated per year, or 132kg per capita</h1>
                </div>
                <div>
                    <h1 className="italic pt-8 text-4xl font-bold text-dark-pink text-right">$1, 000, 000, 000</h1>
                    <h1 className="pt-4 text-right">in total cost of food loss and waste for</h1>
                    <h1 className="text-right">the global economy</h1>
                </div>
                <div>
                    <img src={earth} alt="earth" className="object-contain h-60 pl-20 pt-6"/>
                </div>
                <div>
                    <h1 className="pt-10 text-midnight text-right">one of the <span className="font-bold">UN’s 17 sustainable development</span> </h1>
                    <h1 className="text-midnight text-right"> <span className="font-bold">goals</span> is to halve per capita global food waste by 2030. </h1>
                    <h1 className="pt-8 text-midnight text-right">60% of this waste comes from our own homes – and starts in our fridges. </h1>
                    <h1 className="text-midnight text-right">and starts in our fridges. </h1>
                    <h1 className="pt-8 text-midnight text-right">we all play a part.</h1>
                </div>
                <div>
                </div>
                <div className="text-right">
                    <a href="/" className="italic underline text-right pt-8 text-midnight visited:text-dark-purple ...">return to your fridge</a>
                </div>
            </div>
        </div>
        
    );
}

export default StatsPage;