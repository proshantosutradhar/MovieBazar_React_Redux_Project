export {loadtv} from "../reducers/tvSlice"
export {removetv} from "../reducers/tvSlice"
import axios from "../../utils/axios"
import { loadtv } from "../reducers/tvSlice";

export const asyncloadtv = (id) => async (dispatch, getState) =>{
   try{
  const detail = await axios.get(`/tv/${id}`);
  const externalid = await axios.get(`/tv/${id}/external_ids`);
  const recommendations = await axios.get(`/tv/${id}/recommendations`);
  const similar = await axios.get(`/tv/${id}/similar`);
  const videos = await axios.get(`/tv/${id}/videos`);
  const watchproviders = await axios.get(`/tv/${id}/watch/providers`);
  let alldetails ={
    detail: detail.data,
    externalid: externalid.data,
    recommendations: recommendations.data.results,
    similar: similar.data.results,
    vidoes: videos.data.results.find((m)=>m.type ==='Trailer'),
    watchproviders: watchproviders.data.results.IN
  }

  
  dispatch(loadtv(alldetails))
   } catch (error){
    console.log('error', error)
   }
};