

const cloudinary = require('cloudinary').v2;
cloudinary.config({
cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
api_key: process.env.NEXT_PUBLIC_APP_KEY,
api_secret: process.env.NEXT_PUBLIC_API_SECRET,
});
// Export Cloudninary
export function uploadImage(imageUploaded) {
    return new Promise ((resolve, reject) => {
        // on appelle la méthode de téléchargement Cloudinary Uploader
        cloudinary.uploader.upload(
            imageUploaded,
            {   width: 450,
                height: 550,
                crop: 'fill',
            },
            (err, res) => {
                if (err) reject (err);
                resolve (res);
            }
        );
    });
}

