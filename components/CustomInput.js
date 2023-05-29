import { Controller } from 'react-hook-form';
import { TextInput, StyleSheet } from 'react-native';

import CustomColors from '../styles/Colors';

export default function CustomInput({
    name,
    control,
    reset,
    placeholder,
    multiline,
}) {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange, onBlur } }) => (
                <TextInput
                    style={[
                        styles.inputContainer,
                        multiline ? styles.multi : '',
                    ]}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    reset={reset}
                />
            )}
        />
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: 2,
        borderRadius: 8,
        borderColor: CustomColors.accentPurple,
        height: 50,
        width: 300,
        fontSize: 20,
        paddingHorizontal: 20,
        marginTop: 10,
    },
    multi: {
        paddingTop: 10,
        textAlignVertical: 'top',
        height: 200,
    },
});
