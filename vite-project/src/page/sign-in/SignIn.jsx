import CustomButton from "../../components/custom-button/CustomButton";
import FormInput from "../../components/form-input/FormInput";

const SignIn = () => {
    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign In with your email & password</span>
            <form action="">
                <FormInput type="email" name="email" placeholder="username@xyz.com" />
                <FormInput type="password" name="password" placeholder="Enter your password" />
                <CustomButton type="submit"
                    className="custom-button">Sign In</CustomButton>
            </form>
        </div>
    ) 
}

export default SignIn;