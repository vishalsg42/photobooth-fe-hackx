export const getBase64 = (file: File) => {
	return new Promise((resolve, reject) => {
		try {
			let result: any = null;
			let reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = function() {
				result = reader.result;
				resolve(result);
			};
			reader.onerror = function(error) {
				console.log('Error: ', error);
				reject(error);
			};
		} catch (error) {
			reject(error);
		}
	});
};

export const getAspectRatio = (
	image: HTMLImageElement,
	{
		width = 0,
		height = 0
	}: {
		width?: number;
		height?: number;
	}
) => {
	return new Promise((resolve, reject) => {
		try {
			const newImage = new Image();
			newImage.src = image.src;
			let ratio = 1;

      newImage.onload = () => {
        const { naturalWidth, naturalHeight } = newImage;
        ratio = naturalWidth / naturalHeight;
        if (naturalWidth && naturalHeight) {
          if (width && !height) {
            height = width * ratio;
          } else if (height && !width) {
            width = height * ratio;
          }

          resolve({
            ratio,
            height,
            width,
          });
        } else {
          reject({
            message: "Unable to get values",
          });
        }
      };
      newImage.onerror = reject;
    } catch (e) {
      console.log("e", e);
      reject({
        message: e,
      });
    }
  });
};

export const convertToBase64ByUrl = (url: string): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    try {
      let blob = await fetch(url).then((e) => e.blob());
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    } catch (error) {
      console.log("error", error);
      reject(error);
    }
  });
};

export const loadFile = (url: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((d) => d.json())
        .catch((e) => reject(e));
      resolve(response);
    } catch (error) {
      console.log("error", error);
      reject(error);
    }
  });
};

// Create Blob file from URL
export function blobCreationFromURL(inputURI: string) {
  var binaryVal;

  // mime extension extraction
  // var inputMIME = inputURI.split(",")[0].split(":")[1].split(";")[0];

  // Extract remaining part of URL and convert it to binary value
  if (inputURI.split(",")[0].indexOf("base64") >= 0)
    binaryVal = atob(inputURI.split(",")[1]);
  // Decoding of base64 encoded string
  else binaryVal = unescape(inputURI.split(",")[1]);

  // Computation of new string in which hexadecimal
  // escape sequences are replaced by the character
  // it represents

  // Store the bytes of the string to a typed array
  var blobArray: any = [];
  for (var index = 0; index < binaryVal.length; index++) {
    blobArray.push(binaryVal.charCodeAt(index));
  }

  return new Blob([blobArray], {
    type: "image/png",
  });
}

export const srcToFile = (src: string, fileName: string, mimeType: string) =>
  fetch(src)
    .then((res) => res.arrayBuffer())
    .then((buf) => new File([buf], fileName, { type: mimeType }));
