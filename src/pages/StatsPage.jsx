import React from 'react';
import earth from '../assets/earth.png'

const StatsPage = () => {
    return (
        <div className="flex h-full w-full">
            <div className="grid grid-cols-2 gap-4 grid-rows-[3fr_1.5fr_3fr] justify-evenly w-full h-full">
                <div className="col-span-1">
                    <h1>did you know...</h1>
                    <h1>nearly a fifth of food produced for human consumption is lost or wasted globally. this amounts to: </h1>
                </div>
                <div className="col-span-1 flex-column justify-end">
                    <h1 className="text-right">up to</h1>
                    <h1 className="text-right">10% of global greenhouse gas emissions</h1>
                    <h1 className="text-right">almost five times the total emissions of the aviation sector</h1>
                </div>
                <div className="col-span-1">
                    <h1>1.005 billion tonnes</h1>
                    <h1>of food waste generated per year, or 132kg per capita</h1>
                </div>
                <div className="col-span-1">
                    <h1 className="text-right">$1, 000, 000, 000</h1>
                    <h1 className="text-right">in total cost of food loss and waste for the global economy</h1>
                </div>
                <div className="col-span-1">
                    <img src={earth} alt="earth" className="object-contain"/>
                </div>
                <div className="col-span-1">
                    <h1 className="text-right">one of the UN’s 17 sustainable development goals is to halve per capita global food waste by 2030. </h1>
                    <h1 className="text-right">60% of this waste comes from our own homes – and starts in our fridges. </h1>
                    <h1 className="text-right">we all play a part.</h1>
                </div>
            </div>
        </div>
    );
}

export default StatsPage;