import axios from 'axios'

async function getData(url, method) {
    
    //we can add Authorization token in .env file for security reasons
    let response
    const res = await axios({
      method,
      url,
      headers: {
        Accept:'application/vnd.github+json',
        Authorization: 'Bearer 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'
    },
    });

    try{
        response = res.data;
    }
    catch(e){
        response = e;
    }
    finally{
         
    }
    
    return response;
}
   
export {getData}