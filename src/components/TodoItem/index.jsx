import { useState, useRef, useEffect } from 'react';

const TodoItem = ({ text, id, index, removeItem, handleParagraphChange, replaceDoneItem, isDone }) => {
    const [isEditable, setIsEditable] = useState(false);
    const myFocusElement = useRef(null)

    useEffect(() => {
        myFocusElement.current.focus()
    }, [isEditable])

    const handleEditClick = () => {
        setIsEditable(prev => !prev)
    }
    return (
        <li className='flex items-center bg-white w-full shadow-lg text-1xl max-w-lg rounded-md py-3 px-2 gap-3'>
            <input type="checkbox" name="isdone" id="isdone" className='block cursor-pointer' checked={isDone} onChange={() => replaceDoneItem(id)} />
            <div className="flex justify-between gap-3 w-full">
                <div className="flex gap-2">
                    <span className='font-medium'>{index}.</span>
                    <p className='block outline-none' contentEditable={isEditable} suppressContentEditableWarning={true} onBlur={(e) => handleParagraphChange(e.target.textContent, id)} ref={myFocusElement}>
                        {text}
                    </p>
                </div>
                <div className="flex items-center md:flex-row flex-col gap-2">
                    <button className=" text-white max-w-[25px] max-h-[25px] bg-slate-700 p-[5px] flex justify-center items-center rounded-md hover:bg-slate-500 cursor-pointer transition-all" onClick={handleEditClick} type='button' title='Edit text'>
                        {
                            isEditable ? (
                                <svg viewBox="0 0 512 512" fill="currentColor" className='w-6 h-6' xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-6 h-6'>
                                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                                </svg>
                            )
                        }
                    </button>
                    <button onClick={() => removeItem(id)} className='text-white max-w-[25px] max-h-[25px] bg-slate-700 p-1 flex justify-center items-center active:bg-red-800 rounded-md hover:bg-slate-500 transition-colors' type="button" title='Remove task'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </button>
                </div>
            </div>
        </li>
    )
}

export default TodoItem