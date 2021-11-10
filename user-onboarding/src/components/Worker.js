import React from 'react'

export default function Worker({worker}) {
    return (
        <div className="Worker">
            <h3>{worker.username}</h3>
            <div>
                {worker.email} <br/>
                {worker.password} <br/>
                {worker.wrkPref} <br/>
            </div>
        </div>
    )
}
