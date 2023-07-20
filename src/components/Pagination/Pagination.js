import React from "react";
import { Pagination } from "@mui/material";
export default function PaginationComponent({postPerPage,totalPost,page,setCurrentPage}){
    let pageNumber = 0;
    for (let index = 1; index < Math.ceil(totalPost/postPerPage); index++) {
        pageNumber++
    }
    return(<>
    <Pagination count={pageNumber} page={page} onChange={(event,pageNum)=>{
        setCurrentPage(pageNum)
    }}/>
    </>)


}