import React, {Component} from 'react';

class AddBooks extends Component {
    render() {
        const {bname,author,pubDate,handleChange,handleAdd,isEdited}=this.props;
        return (
            <div>
                <form onSubmit={handleAdd}>
                Name:<input type="text" name="bname" value={bname} required='required' onChange={handleChange}/>
                Author:<input type="text" name="author" value={author} required='required' onChange={handleChange}/>
                Published Date:<input type="date" name="pubDate" value={pubDate} required='required' onChange={handleChange}/>
                <button type='submit'>{isEdited?'Update':'Add'}</button>
                </form>
            </div>
        );
    }
}

export default AddBooks;