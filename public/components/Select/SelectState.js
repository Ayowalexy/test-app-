import React, { useState, useEffect } from 'react';
import { AutoComplete, Input } from 'antd';
import { getStates } from '../../../pages/api/api';

const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
});

const SearchState = ({ selectedCountry=1, setSelectedState }) => {
    const [value, setValue] = useState('');
    const [options, setOptions] = useState([]);
    const [r_states, set_states] = useState([]);
    const [states, setStates] = useState([])



    const onSearch = (text) => {
        const filtered = [...options];
        if (filtered.length <= 0 || !text) {
            set_states([]);
            return;
        } else {
            const result = filtered.filter(
                (item) => item.label.toLowerCase().indexOf(text.toLowerCase()) >= 0
            );
           
            set_states(result);
        }
    };

    const onSelect = (data) => {
        const filtred = states.find(ele => ele.name.toLowerCase() === data.toLowerCase())

        console.group(filtred._id)
        setSelectedState(filtred._id)
    };

    const onChange = (data) => {
        setValue(data);
    };

    useEffect(() => {
        if (selectedCountry) {
            (async () => {
                const data = await getStates(selectedCountry)
                if (data) {
                    setStates(data)
                }
            })()
        }
    }, [selectedCountry])


    useEffect(() => {
        if (states.length) {
            let allStates = [];
            allStates = states.map(element => ({
                value: element.name,
                _id: element._id,
                label: `${element.name}`,
            }))
            setOptions(allStates)
        }
    }, [states])



   

    return (
        <>
            <AutoComplete
                options={r_states}
                style={{
                    width: "100%",
                    marginTop: "-50px"


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
                        fontSize: "13px"
                    }}
                    allowClear
                    placeholder="Search countries"
                />
            </AutoComplete>
        </>
    );
};

export default SearchState;