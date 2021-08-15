const uploadImage: any = (file: string | Blob) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      'POST',
      'https://api.imgbb.com/1/upload?key=93b5beff56e2e06ce7291179d4e27ae6',
    );
    // xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
    const data = new FormData();
    data.append('image', file);
    xhr.send(data);
    xhr.addEventListener('load', () => {
      const response = JSON.parse(xhr.responseText);
      resolve(response);
    });
    xhr.addEventListener('error', () => {
      const error = JSON.parse(xhr.responseText);
      reject(error);
    });
  });
};

export default {
  uploadImage,
};
