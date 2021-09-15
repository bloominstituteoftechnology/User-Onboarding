import React from 'react';
import Worker from './Worker';

export default function WorkersList ({workers}) {
    console.log(workers);
    return (
        <div>
            <h2>Workers:</h2>
            {
                workers.map((worker, idx) => {
                    return(
                        <Worker key={idx} worker={worker}/>
                    )
                })
            }
        </div>
    )
}