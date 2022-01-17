import React from "react";

interface ProgressBarProps {
    percent: string
}

const ProgressBar : React.FC<ProgressBarProps> = (props : ProgressBarProps) => {
    return (
        <React.Fragment>
            <p className="text-center text-gray-400"><span className="font-bold">{props.percent}%</span> Finished</p>
            <div className="w-96 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{width: `${props.percent}%`}}></div>
            </div>
        </React.Fragment>
    );
}

export default ProgressBar;