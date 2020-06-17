import _ from 'lodash'
const Paginate = (curentPage,pageSize,items) => {

    
    let startIndex=(curentPage-1)*pageSize;
   
    return _(items).slice(startIndex).take(pageSize).value(); 
}
 
export default Paginate;