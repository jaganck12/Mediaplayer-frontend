const { commonAPI } = require("./commonAPI");
const { serverUrl } = require("./serverUrl");

//upload video

export const uploadVideo =async (reqBody)=>{
    //make POST http request "http://localhost:4000/videos" to add videos to the json server return response to the add componrnt

    return await commonAPI("POST",`${serverUrl}/videos`,reqBody)
}

//get all videos from json

export const getAllVideo =async ()=>{
    //make GET http request "http://localhost:4000/videos" to get all videos from the json server return response to the view componrnt

    return await commonAPI("GET",`${serverUrl}/videos`,"")
}

//get a video

export const getAVideo =async (id)=>{
    //make GET http request "http://localhost:4000/videos" to get all videos from the json server return response to the videocard componrnt

    return await commonAPI("GET",`${serverUrl}/videos/${id}`,"")
}

//delete a video

export const deleteVideo =async (id)=>{
    //make DELELTE http request "http://localhost:4000/videos" to delete  videos from the json server return response to the videocard componrnt

    return await commonAPI("DELETE",`${serverUrl}/videos/${id}`,{})
}


//store watching history to json server

export  const addToHistory = async(videoDetails)=>{
    //Make post http request "http://localhost:4000/history" to store video to the json-server return response to the video card component
    
    return await commonAPI("POST",`${serverUrl}/history`,videoDetails)
    };

export const getAllHistory = async()=>{
        //Make GET http request "http://localhost:4000/history" to get video to the json-server return response to the Watch history component

        return await commonAPI("GET",`${serverUrl}/history`)
}


export const deleteHistory = async(id)=>{
    //Make delete http request "http://localhost:4000/history/id" to delete video to the json-server return response to the Watch history component

    return await commonAPI("DELETE",`${serverUrl}/history/${id}`,{});
}




//add category to json server
export const addToCategory = async (reqBody)=>{
        //Make post http request "http://localhost:4000/categories" to store video to the json-server return response to the category component

        return await commonAPI("POST",`${serverUrl}/categories`,reqBody)
}

//get all category from json server
export const getAllCategory = async()=>{
            //Make post http request "http://localhost:4000/categories" to store video to the json-server return response to the category component

            return await commonAPI("GET",`${serverUrl}/categories`,"")
}

//delete  all category from json server
export const deleteCategory = async(id)=>{
    //Make post http request "http://localhost:4000/categories" to store video to the json-server return response to the category component

    return await commonAPI("DELETE",`${serverUrl}/categories/${id}`,{})
}


//update  all category from json server
export const updateCategory = async(id,body)=>{
    //Make put http request "http://localhost:4000/categories" to update video to the json-server return response to the category component

    return await commonAPI("PUT",`${serverUrl}/categories/${id}`,body)
}


