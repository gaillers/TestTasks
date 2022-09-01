export const getPosition = (callback) => {
    const API_URL_POSITION = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions'

    fetch(API_URL_POSITION)
        .then(res => {
            return res.json()
        })
        .then(res => {
            callback(res.positions)
            console.log(res)
            console.log(res.positions);

            if (res) { console.log('true Positions REST API') }
            else { console.log('error API') }
        })

}