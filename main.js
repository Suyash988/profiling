import Worker from 'worker_threads'

function runService(workerData) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./service.js', { workerData})
        worker.on('message', resolve)
        worker.on('error', reject)
        worker.on('exit', (code) => {
            if(code !== 0 )
                reject(new Error(`Worker stopped with exit code ${code}`))
        })
    })
}

async function main( ) {
    const result = await runService('heavy computation data')
    console.log(result);
}

main().catch(err => console.error(err))