import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import TodoDoneList from './components/TodoDoneList';
import Todolist from './components/Todolist';
import TodoInput from './components/TodoInput';

// My data
const data = [
    { text: 'Learn Reactjs', id: nanoid(), isDone: false },
    { text: 'Do some practicing', id: nanoid(), isDone: false },
];

function App() {
    const [inputText, setInputText] = useState('');

    // Get local Storage
    const [todoItems, setTodoItems] = useState(() => {
        const todoItemsInfo = JSON.parse(localStorage.getItem('todoItems'));
        return todoItemsInfo ? todoItemsInfo : data;
    });

    // Set local Storage
    useEffect(() => {
        localStorage.setItem('todoItems', JSON.stringify(todoItems));
    }, [todoItems]);

    // Remove item
    const removeItem = (id) => {
        let answer = confirm('Are you sure about that?')
        if (answer) {
            setTodoItems((prev) =>
                prev.filter((item) => item.id !== id)
            );
        }
    };

    // Replace item
    const replaceDoneItem = (id) => {
        setTodoItems((prev) => {
            return prev.map((item) => {
                if (item.id === id) {
                    return {
                        ...item, isDone: !item.isDone
                    }
                }
                return item
            })
        });
    }

    // Add new item and clear text after that
    const addItemsAndClearText = () => {
        if (inputText !== '') {
            setTodoItems((prev) =>
                prev.concat({ text: inputText, id: nanoid(), isDone: false })
            );
            setInputText('');
        }
    };

    const doneItemsList = todoItems.filter(item => item.isDone)
    const needTodoItemsList = todoItems.filter(item => !item.isDone)

    return (
        <div className=' container flex justify-center items-center py-5 '>
            <div className="flex flex-col gap-5 md:max-w-[520px] lg:max-w-[670px] w-full">
                <h1 className="text-3xl font-bold text-center">Your Todo list</h1>
                <TodoInput addItemsAndClearText={addItemsAndClearText} setInputText={setInputText} inputText={inputText} />
                <div className="flex flex-col lg:flex-row justify-center gap-7">
                    {
                        todoItems.length === 0 ? (
                           <span className='text-center font-bold'>List is empty</span>
                        ) : (
                            <>
                                <Todolist todoItems={needTodoItemsList} setTodoItems={setTodoItems} removeItem={removeItem} replaceDoneItem={replaceDoneItem} />
                                <TodoDoneList doneItemsList={doneItemsList} removeItem={removeItem} replaceDoneItem={replaceDoneItem} />
                            </>
                        )
                    }
                </div>
            </div>
        </div >
    )
}

export default App
