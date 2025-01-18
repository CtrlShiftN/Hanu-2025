import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { SHARED_INPUT_STYLES } from '../../styles/AuthStyles';

const Input = ({
    value,
    onChangeText,
    placeholder,
    isError,
}: {
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    isError: boolean;
}) => {
    return (
        <View>
            <View style={SHARED_INPUT_STYLES.inputView}>
                <TextInput
                    style={[
                        SHARED_INPUT_STYLES.input,
                        isError && SHARED_INPUT_STYLES.errorInput,
                    ]}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                />
            </View>
            {isError && (
                <Text style={SHARED_INPUT_STYLES.errorText}>
                    Please enter a valid {placeholder.toLowerCase()}.
                </Text>
            )}
        </View>
    );
};

export default Input;
