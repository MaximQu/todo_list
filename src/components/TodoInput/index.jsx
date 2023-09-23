import React from 'react'

const TodoInput = ({ addItemsAndClearText, setInputText, inputText }) => {
    //Set new value for state with input text
    const handleChange = (e) => {
        setInputText(e.target.value);
    };
    return (
        <div className="flex justify-center items-center gap-1 bg-[#EBECF0] p-3 rounded-md min-w-[320px]">
            <input className="p-2 rounded-md w-full mr-3 focus:border-l-slate-800" placeholder='Some todo' onChange={handleChange} value={inputText} type="text" required />
            <button className="bg-slate-500 flex items-center p-2 rounded-md hover:bg-slate-400 active:bg-green-700 transition-all" onClick={addItemsAndClearText} type="button" title='Add task'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Add
            </button>
        </div>
    )
}

export default TodoInput
