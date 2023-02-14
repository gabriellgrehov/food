import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'

const SearchBarInput = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <EvilIcons name='search' style={styles.iconStyle}/>
            <TextInput
                autoCapitalize='none'
                autoCorrect={false} 
                style={styles.inputStyle}
                placeholder='Search'
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#f3eee0',
        borderRadius: 10,
        height: 50,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        flex: 1
    },
    iconStyle: {
        fontSize: 45,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBarInput;