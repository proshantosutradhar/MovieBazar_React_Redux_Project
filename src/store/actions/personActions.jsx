export {loadperson} from "../reducers/personSlice"
export {removeperson} from "../reducers/personSlice"
import axios from "../../utils/axios"
import { loadperson } from "../reducers/personSlice";

export const asyncloadperson = (id) => async (dispatch, getState) =>{
   try{
  const detail = await axios.get(`/person/${id}`);
  const externalid = await axios.get(`/person/${id}/external_ids`);

  const combinedCredits = await axios.get(`/person/${id}/combined_credits`);

  const movieCredits = await axios.get(`/person/${id}/movie_credits`);

  const tvCredits = await axios.get(`/person/${id}/tv_credits`);

  let alldetails ={
    detail: detail.data,
    externalid: externalid.data,
    combinedCredits: combinedCredits.data,
    movieCredits: movieCredits.data,
    tvCredits: tvCredits.data,

  }
  
  dispatch(loadperson(alldetails))
   } catch (error){
    console.log('error', error)
   }
};