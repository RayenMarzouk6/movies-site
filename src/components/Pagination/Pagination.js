import React, { useEffect , useState } from 'react'
import ReactPaginate from 'react-paginate'
import './Pagination.css'
/**/import { useDispatch, useSelector } from 'react-redux'
/**/import { getPageCount } from '../../redux/actions/movieAction.js'


const PaginationCompo = () => {

  const [ pageCeount , setPageCount ] = useState(0)

  const dispatch = useDispatch()
  const pages = useSelector((state)=>state.pageCount)

  useEffect(() => {
    setPageCount(pages);
  }, [pages]); // Add 'pages' as a dependency


 const getPageMovie = async(page)=>{

      dispatch(getPageCount(page))
  }
  

  const handelClick = (select) => {
    const numPage = select.selected + 1;
    getPageMovie(numPage);
  };
  



  return (
    <div className='navigate'>
       <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handelClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        pageCount={500}    // const pageCount = totalPageNumber 
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={'pagination justify-content-center p-3'}

        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}

        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}

        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}

        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        // active page
        activeClassName={'active selectedPage'}
      />
  </div>
  )
}

export default PaginationCompo