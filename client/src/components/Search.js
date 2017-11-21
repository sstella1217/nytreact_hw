import React from 'react';
import './Search.css';


const Search = ({ children }) => {
  
    return (
      <div className="App">
      <div class="panel panel-default" id="search">
        <div class="panel-body">
        <h4 class="panel-title">Search</h4>
        
          <form>
          <div class="form-group">
          <label for="topic">Topic</label>
          <br></br>
          <div class="panel panel-default">
          <div class="panel-body" input-type="text" id="topic" placeholder="">
          </div>
          </div>
          </div>
          <br></br>

          <div class="form-group">
          <label for="topic">Start Year</label>
          <br></br>
          <div class="panel panel-default">
          <div class="panel-body" input-type="date" id="syear" placeholder="">
          </div>
          </div>
          </div>
           <br></br>

           <div class="form-group">
          <label for="topic">End Year</label>
          <br></br>
          <div class="panel panel-default">
          <div class="panel-body" input-type="date" id="eyear" placeholder="">
          </div>
          </div>
          </div>
           <br></br> 
           <button type="button" class="btn btn-outline-dark" id="sbutt" >Search</button>
          </form>
          <br></br> 

        </div>
        </div>
        </div>
    );

     }
  
 
export default Search;    
   
    

  
