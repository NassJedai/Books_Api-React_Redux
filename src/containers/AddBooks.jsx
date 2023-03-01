import React, {useState} from 'react';
import { connect } from 'react-redux';
import {addBook,deleteBook, deleteAllBooks}  from '../redux/actions/actionAddBooks';
import FlipMove from 'react-flip-move';


const AddBooks = ({libraryData, addBook, deleteBook, deleteAll}) => {

    const initialState = {
        title: '',
        author:''
    }
    const [newData, setNewData] = useState(initialState)
    

    const handleChange = (e) => {
        e.preventDefault();
        // console.log(newData);
        addBook(newData);
        // Vider le input
        setNewData(initialState);
    }

   const displayData = libraryData.length > 0 ? 

        <FlipMove>
            {
                libraryData.map((data) => {
                    return (
                        <li key={data.id} className='list-group-item d-flex justify-content-between'>
                            <span><strong>Titre: </strong>{data.title}</span> 
                            <span><strong>Auteur: </strong>{data.author}</span>
                            <span onClick={()=> deleteBook(data.id)} className='btn btn-danger'>X</span>
                            
                        </li>
                    )
                })
            }
        </FlipMove>
        
        : <p className='text-center'>Aucune data à afficher </p>

    
    const deleteAllBooks = libraryData.length > 0 &&             
        <div className="d-flex justify-content-center">
            <button onClick={()=> deleteAll()} className='btn btn-danger mt-4 mb-5'>Effacer tous les livres</button>
        </div>


  return (
    <main role='main'>
        <div className='jumbotron jumbotron-fluid'>
            <div className='container text-center'>
                <h1 className='display-4'>BOOKS</h1>
                <p>Ajouter un livre à votre biliothèque</p>

                <form className="form-inline justify-content-center" onSubmit={handleChange}>
                    <div className='form-group'>
                        <input 
                            value={newData.title}
                            type="text" 
                            className='form-control' 
                            placeholder='Titre du livre' 
                            onChange={(e) => setNewData({...newData, title: e.target.value})}
                            required/>
                    </div>

                    <div className='form-group mt-2'>
                        <input 
                            value={newData.author}
                            type="text" 
                            className='form-control ml-3' 
                            placeholder='Auteur du livre'
                            onChange={(e) => setNewData({...newData, author: e.target.value})}
                            required/>
                    </div>


                    <div className='form-group'>
                        <button className='btn btn-outline-secondary mt-3'>Ajouter un livre</button>
                    </div>
                </form>
            </div>
        </div>

        <div className="container" style={{minHeight: '200px'}}>
            <div className="row">
                <div className="col-md-12">
                    <ul className='list-group mt-3'>
                        {displayData}
                    </ul>

                    {deleteAllBooks}
                </div>

            </div>
        </div>
    </main>
  )


}

const addStateToProps = (state) => {
    return {
        libraryData: state.library
    } 
  }

const addDispatchToProps = (dispatch) => {
    return {
        addBook: (param) => dispatch(addBook(param)),
        deleteBook: (id) => dispatch(deleteBook(id)),
        deleteAll: () => dispatch(deleteAllBooks())
    }
}

export default connect(addStateToProps, addDispatchToProps)(AddBooks);