import TodoItem from "../TodoItem"

const TodoDoneList = ({ doneItemsList, removeItem, replaceDoneItem }) => {
    return (
        <div className="bg-[#EBECF0] pt-4 rounded-md min-w-[320px]">
            <h2 className='text-center text-2xl font-bold'>Done</h2>
            <ul className="flex flex-col gap-4 py-5 px-3 w-full overflow-y-scroll max-h-[700px]">
                {
                    doneItemsList.length === 0 ? (
                        <span className='text-center font-bold'>Nothing has been done</span>
                    ) : (
                        doneItemsList.map((item, i) => (
                            <TodoItem key={item.id} text={item.text} isDone={item.isDone} id={item.id} index={i + 1} removeItem={removeItem} replaceDoneItem={replaceDoneItem} />
                        ))
                    )
                }
            </ul>
        </div>

    )
}
export default TodoDoneList