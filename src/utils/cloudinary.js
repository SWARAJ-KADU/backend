import { v2 } from "cloudinary";
import fs from "fs";//fs = file system

v2.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async function (localFilePath) {
    try{
        if(!localFilePath) return null;
        //upload the file on cloudinary
        const response = await v2.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        //file has been uploaded successfully
        fs.unlinkSync(localFilePath)
        return response
    }
    catch(error){
        fs.unlinkSync(localFilePath) //remove the locally saved temporary file as the upload operation failed
        return null
    }
}

export {uploadOnCloudinary} 