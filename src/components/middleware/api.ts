import * as request from 'request'

class sessionApi {
    static login(credintials) {

        const options = {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json'}),
            body: JSON.stringify({credintials: credintials}),
            json: true
        }

        const requestAction = new request(options, function (error, response, body){
            if (error) throw new Error(error);
        })
        
        return fetch(requestAction).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default sessionApi;