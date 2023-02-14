import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import SearchBarInput from '../components/SearchBarInput';
import useResults from '../hooks/useResults';
import ResultsList from '../components/resultsList';


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }

    return ( 
        <>
            <SearchBarInput 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text>: null}
            
            <ScrollView>
                <ResultsList results={filterResultByPrice('$')} title='Cost Effective'/>
                <ResultsList results={filterResultByPrice('$$')} title='Bit Pricer'/>
                <ResultsList results={filterResultByPrice('$$$')} title='Big Spender'/>
            </ScrollView>
        </>
);};

const styles = StyleSheet.create({

});

export default SearchScreen;