import React, {Component} from 'react';
import './App.css';
import AddBooks from "./Components/AddBooks";
import DisplayBooks from "./Components/DisplayBooks";
class App extends Component{
  state={
    bookList:[],
    books: {
      id:0,
      bname: '',
      author: '',
      pubDate: '',
      isEdited: false
    }

  }
  handleChange=(e)=>{
    const{name,value}=e.target;
    this.setState({
    books:{
      ...this.state.books,
      [name]:value
    },
  })
  }
  handleAdd=(e)=>{
    e.preventDefault();
    let books={...this.state.books};
    books.id = Math.random();
    const listItems=[...this.state.bookList, books];
    this.setState({
      bookList:listItems,
      books:{
        bname:'',
        author:'',
        pubDate:''
      }

    })
    console.log(this.state.bookList);
  }
  handleDelete=(id)=>{
    const afterDelete=this.state.bookList.filter(book=>book.id!==id);
    this.setState({
      bookList:afterDelete
    })
  }
  handleEdit=(id)=>{
    const filteredList=this.state.bookList.filter(book=>book.id!==id);
    let toEdit=this.state.bookList.find(book=>book.id===id)
    this.setState({
      bookList:filteredList,
      books:{
        id:toEdit.id,
        bname:toEdit.bname,
        author:toEdit.author,
        pubDate:toEdit.pubDate,
        isEdited:true

      }
    })
  }
  render() {
      const {bId,bname,author,pubDate,isEdited}=this.state.books;
      const bookList=this.state.bookList;
    return (
        <>
          <AddBooks
              handleChange={this.handleChange}
              bId={bId}
              bname={bname}
              author={author}
              pubDate={pubDate}
              isEdited={isEdited}
              handleAdd={this.handleAdd}
          />
          <DisplayBooks
              bookList={bookList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
          />
        </>
    );
  }
}

export default App;
