import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <form>
                <input type='text' value={props.inputText} onChange={() => {}} />
                <button>Add item!</button>
            </form>
        </div>
    )
}

export default TodoForm;