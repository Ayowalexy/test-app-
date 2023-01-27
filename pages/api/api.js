import axios from 'axios'

export const getAllCountries = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/countries`);
      return res.data
    } catch(err){
      console.log(err)
      throw err
    }
  }
  
  export const getStates = async (id) => {
    try {
      const d = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/states`);
      const data = d.data;
      
      let res = [];
      if (data) {
        const filtered = data.filter(ele => ele.country_id === id)
        res = filtered
      }    
      return res
    } catch(err){
      console.log(err)
      throw err
    }
  }