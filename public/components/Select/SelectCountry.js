import React, { useState, useEffect } from 'react';
import { AutoComplete, Input } from 'antd';
import { getAllCountries } from '../../../pages/api/api';


const SearchCountry = ({setSelectedCountry}) => {
    const [value, setValue] = useState('');
    const [options, setOptions] = useState([]);
    const [ data, setData ] = useState([]);
    const [countries, setCountries] = useState([]);


    const onSearch = (text) => {
        const filtered = [...options];
        if (filtered.length <= 0 || !text) {
            setCountries([]);
            return;
        } else {
            const result = filtered.filter(
                (item) => item.name.toLowerCase().indexOf(text.toLowerCase()) >= 0
            );
            setCountries(result);
        }
    };

    const onSelect = (name) => {
        const selected = data.find(ele => ele.name.toLowerCase() === name.toLowerCase()) 
        setSelectedCountry(selected?._id)
    };

    const onChange = (data) => {
        setValue(data);
    };

    useEffect(() => {
        (async () => {
            const res = await getAllCountries()
            setData(res)
        })()
    }, [])

    useEffect(() => {
        if (data) {
            let countries = [];
            countries = data.map(element => ({
                value: element.name,
                _id: element._id,
                label: `${element.emoji} ${element.name}`,
                emoji: element.emoji,
                name: element.name
            }))
            setOptions(countries)
        }
    }, [data])

    return (
        <>
            <AutoComplete
                options={countries}
                style={{
                    width: "100%",
                   
                }}
                onSelect={onSelect}
                onSearch={onSearch}
            >
                <Input
                    bordered={false}
                    style={{
                        height: "60px",
                    border: "1px solid #CBD5E1",
                    borderRadius: "3px",
                    outline: "none",
                    backgroundColor: "rgb(250,250,250)",
                    marginBottom: "20px",
                    paddingLeft: "30px",
                    fontSize: "13px",
                    marginTop: "-50px"
                    }}
                    allowClear
                    placeholder="Search countries"
                />
            </AutoComplete>
        </>
    );
};

export default SearchCountry;