import Axios from 'axios';
import { validateAll } from 'indicative';
import config from '../config';

export default class AuthService {

    async registerUser(data){

        const rules = {
            name: 'required|string',
            email: 'required|email',
            password : 'required|string|min:6|confirmed'
        }

        const messages = {
            required: 'This {{field}} is required.',
            'password.confirmed': 'The password confirmation does not match.'
        }

        try {

            await validateAll(data, rules, messages)

            const response  = await Axios.post(`${config.apiUrl}/auth/register`, {

                name: data.name,
                email : data.email,
                password : data.password

            })
            console.log(response);

            return response.data.data;

        } catch (errors) {
            console.log(errors)
            const formattedErrors = {}

            if(errors.status == 422){
                console.log(2);
                formattedErrors['email'] = errors.response.data['email'][0];
                return Promise.reject( formattedErrors )

            }

            errors.forEach(error => formattedErrors[error.field] = error.message )

            return Promise.reject( formattedErrors )
        }
    }
}