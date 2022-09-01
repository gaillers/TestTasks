export const getUsers = (callback) => {
    const API_URL_USERS = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6';

    fetch(API_URL_USERS)
        .then(res => {
            return res.json()
        })
        .then(res => {
            callback(res.users)
            console.log(res);
            console.log(res.users)

            if (res) { console.log('true users REST API') }
            else { console.log('error API') }
        })
}