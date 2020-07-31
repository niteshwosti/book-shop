import React, {Component} from 'react';
import '../App.css';

class DisplayBooks extends Component {
    render() {
        const {bookList,handleDelete,handleEdit}=this.props;
        return (
            <div className="displayBook">
                <table border='1' >
                <th>BookName</th>
                <th>Author</th>
                <th>Published Date</th>
                <th>Action</th>
                    {
                        bookList.map(value=>(
                            <tr key={value.id}>
                                <td>{value.bname}</td>
                                <td>{value.author}</td>
                                <td>{value.pubDate}</td>
                                <td>
                                    <button type='button' onClick={()=>handleDelete(value.id)}>Delete</button>
                                    <button type='button' onClick={()=>handleEdit(value.id)}>Edit</button>
                                </td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        );
    }
}

export default DisplayBooks;