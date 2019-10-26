import React from 'react';
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component'

import { auth, signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    };
 
    handleSubmit = async e => {
        e.preventDefault();
        
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState ({email: '', password: ''});
        } catch (e) {
            console.error(e);
        }


        this.setState({email: '', password: ''})
    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({[name]: value })
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an accout</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    
                    <FormInput 
                    label='Email' 
                    handleChange={this.handleChange} 
                    name="email" 
                    type="email" 
                    value={this.state.email} 
                    required />
                    
                    <FormInput 
                    label='Password' 
                    handleChange={this.handleChange} 
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    required />
                <div className='buttons'>
                <CustomButton type='submit' > Sign In </CustomButton> 
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn > 
                {' '}  

                Sign In with Google{' '} 
                
                </CustomButton>
                </div>
                </form>
            
            </div>
        )
    } 

}

export default SignIn;