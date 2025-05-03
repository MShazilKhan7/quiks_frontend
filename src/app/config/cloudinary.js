// Cloudinary configuration
export const CLOUDINARY_CLOUD_NAME = 'dvqoptvzk';
export const CLOUDINARY_UPLOAD_PRESET = 'chatapp';
export const CLOUDINARY_API_KEY = '268666298435955';

export const cloudinaryConfig = {
    cloudName: CLOUDINARY_CLOUD_NAME,
    uploadPreset: CLOUDINARY_UPLOAD_PRESET,
    apiKey: CLOUDINARY_API_KEY
};

// Function to upload image to Cloudinary
export const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    
    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        console.log('Cloudinary response:', data);
        return data.url;
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        throw error;
    }
};