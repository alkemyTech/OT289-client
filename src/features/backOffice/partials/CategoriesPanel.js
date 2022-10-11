import React, {useState,useEffect} from "react"
import adminService from "../../../services/adminService"
import ListGroup from 'react-bootstrap/ListGroup';


const CategoriesPanel =({defaultCatg}) => {
    const [category, setCategori] = useState(defaultCatg)

    const categoriesList = async () => {
        let response = await adminService.categoriesPanel()
        setCategori(response.data)        
    }   

    useEffect(()=>{
        categoriesList()
    },[])
      
    return (        
        <div className="col-sm-8 py-3 align-items-center justify-content-center">
          <h1>CATEGORIAS</h1>
          {(category) &&
            category.map((b,i) => (  
                <ListGroup className="col-sm-8 py-2 mx-auto">
                <ListGroup.Item>{i+1}.-{b.name}</ListGroup.Item>                
                </ListGroup>                     
                ))
           }           
        </div>
      );     
        
    
}

export default CategoriesPanel