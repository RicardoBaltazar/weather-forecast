import React, { FormEvent, useState } from 'react';
import { InputText, Button } from './styles';

type Props = {
    inputValue?: String
}

const Input = (props: Props) => {

    const [ inputValue, setInputValue ] = useState('')

    function handleSubmit(event: FormEvent){
        event.preventDefault();
        alert(inputValue);
        setInputValue('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <InputText
                    type="text"
                    placeholder='Insira aqui o nome da cidade'
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                />
                <Button 
                type="submit"
                >
                    ok
                </Button>
            </form>


        </>
    )
}

export default Input;