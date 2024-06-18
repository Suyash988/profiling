import {workerData, parentPort} from 'worker_threads'

function heavyComputation(data) {
    //your cpu-intensive task here
    return `processed ${data}`
}

parentPort.postMessage(heavyComputation(workerData))