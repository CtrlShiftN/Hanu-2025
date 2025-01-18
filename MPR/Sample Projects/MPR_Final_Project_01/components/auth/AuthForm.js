import { useState } from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import AuthHandlerButton from './ui/AuthHandlerButton';
import Input from './Input';
import { Colors } from '../../constants/styles';

function AuthForm({ isSignIn, onSubmit, credentialsInvalid }) {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  const {
    email: emailIsInvalid,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
      case 'confirmPassword':
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  return (
    <View style={styles.form}>
      <View>
        <Input
          label="Email Address"
          onUpdateValue={updateInputValueHandler.bind(this, 'email')}
          value={enteredEmail}
          keyboardType="email-address"
          isInvalid={emailIsInvalid}
        />
        <Input
          label="Password"
          onUpdateValue={updateInputValueHandler.bind(this, 'password')}
          secure
          value={enteredPassword}
          isInvalid={passwordIsInvalid}
        />
        {!isSignIn && (
          <Input
            label="Confirm Password"
            onUpdateValue={updateInputValueHandler.bind(this, 'confirmPassword')}
            secure
            value={enteredConfirmPassword}
            isInvalid={passwordsDontMatch}
          />
        )}
        {
          isSignIn && 
          <>
             <Pressable
                style={styles.passRecoverButton}
              >
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
              </Pressable>
          </>    
        
        }
        <View style={styles.buttons}>
          <AuthHandlerButton onPress={submitHandler}>
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </AuthHandlerButton>
        </View>
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
  passRecoverButton: {
    alignItems: "flex-end"
  },
  forgotPasswordText: {
    color: Colors.authText,
  }
});