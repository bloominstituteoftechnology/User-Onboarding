import React from 'react';
import Worker from './Worker';

export default function WorkersList ({workers}) {
    return (
        <div>
            <h2>Workers:</h2>
            {
                workers.map(worker => {
                    return(
                        <Worker key={worker.id} worker={worker}/>
                    )
                })
            }
        </div>
    )
}