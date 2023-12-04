import { createSlice } from "@reduxjs/toolkit";

const numberSlice = createSlice({
    name: 'numberSlice',
    initialState: {
        result: null,
        inputValue1: '',
        inputValue2: ''
    },
    reducers: {
        inputValue: (state, action) => {
            const {inputNumber, inputIndex } = action.payload
            if (inputIndex === 1) {
                state.inputValue1 = inputNumber
            }else if (inputIndex === 2){
                state.inputValue2 = inputNumber
            }
        },
        addNumbers: (state) => {
            if (state.inputValue1 === '' || state.inputValue2 === '') {
                alert('Введите числа в поля')
            }else {
                state.result = String(Number(state.inputValue1) + Number(state.inputValue2))
            }
        },
        subtractNumbers: (state) => {
            if (state.inputValue1 === '' || state.inputValue2 === '') {
                alert('Введите числа в поля')
            }else {
                state.result = String(Number(state.inputValue1) - Number(state.inputValue2))
            }
        },
        timesNumbers: (state) => {
            if (state.inputValue1 === '' || state.inputValue2 === '') {
                alert('Введите числа в поля')
            }else {
                state.result = String(Number(state.inputValue1) * Number(state.inputValue2))
            }
        },
        divideNumbers: (state) => {
            if (state.inputValue1 === '' || state.inputValue2 === '') {
              alert('Please enter values in both fields');
            } else {
              state.result = String(Number(state.inputValue1) / Number(state.inputValue2));
            }
        }
    }
})

export const { inputValue, addNumbers, subtractNumbers, timesNumbers, divideNumbers } = numberSlice.actions;

export default numberSlice.reducer