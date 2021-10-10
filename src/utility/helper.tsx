export const getBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
        try {
            let result = null;
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                result = reader.result;
                resolve(result);
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
                reject(error);
            };
        } catch (error) {
            reject(error);
        }
    })
}
// export const convertToBase64 = (file: string) => {
//     return new Promise((resolve, reject) => {
//         try {
//             let img = new Image();
//             img.crossOrigin = 'Anonymous';
//             // const url = URL.createObjectURL(file);
//             img.src = file;

//             // The magic begins after the image is successfully loaded
//             img.onload = function () {
//                 let canvas = document.createElement('canvas');
//                 let ctx = canvas.getContext('2d');
//                 if (ctx instanceof CanvasRenderingContext2D) {
//                     canvas.height = img.naturalHeight;
//                     canvas.width = img.naturalWidth;
//                     ctx.drawImage(img, 0, 0);

//                     // Unfortunately, we cannot keep the original image type, so all images will be converted to PNG
//                     // For this reason, we cannot get the original Base64 string
//                     let uri = canvas.toDataURL('image/png'),
//                         b64 = uri.replace(/^data:image.+;base64,/, '');

//                     resolve(b64);
//                 }
//             };

//         } catch (error) {
//             console.log('error', error);
//         }
//     })

// }

export const convertToBase64 = (url: string): Promise<string> => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await fetch(url);
            let blob = await response.blob();
            const reader = new FileReader()
            reader.onloadend = () => resolve(reader.result as string)
            reader.onerror = reject
            reader.readAsDataURL(blob);
            // resolve(reader.readAsDataURL(blob));
        } catch (error) {
            console.log('error', error);
            reject(error);
        }
    })
}

export const loadFile = (url: string) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            return response.json();
        } catch (error) {
            console.log('error', error);
        }
    });
};

export const mergeImage = (baseImage: string, frame: string) => {
    return new Promise(async (resolve, reject) => {

    });
}