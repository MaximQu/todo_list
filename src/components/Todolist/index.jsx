import TodoItem from '../TodoItem';

const Todolist = ({ todoItems, setTodoItems, removeItem, replaceDoneItem }) => {

    // Change text
    const handleParagraphChange = (curText, id) => {
        setTodoItems(prev => {
            return prev.map(item => {
                return item.id === id ? { ...item, text: curText } : item
            })
        });
    }

    return (
        <div className="bg-[#EBECF0] pt-4 rounded-md min-w-[320px]">
            <h2 className='text-center text-2xl font-bold'>Todo</h2>
            <ul className="flex flex-col gap-4 max-h-[700px] py-5 px-3 w-full rounded-md overflow-y-scroll ">
                {
                    todoItems.length === 0 ? (
                        <span className='text-center font-bold'>Todo list is empty</span>
                    ) : (

                        todoItems.map((item, i) => (
                            <TodoItem key={item.id} handleParagraphChange={handleParagraphChange} text={item.text} isDone={item.isDone} id={item.id} index={i + 1} removeItem={removeItem} replaceDoneItem={replaceDoneItem} />
                        ))
                    )
                }
            </ul>
        </div>

    );
};

export default Todolist;
