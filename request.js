const axios = require("axios");

 async  function tiktok_downloader(instagram_link){
    try {
        const options = {
            method: 'GET',
            url: 'https://instagram-media-downloader.p.rapidapi.com/rapid/post.php',
            params: {url: instagram_link},
            headers: {
              'X-RapidAPI-Key': '01dd474ed7msh1613f4884d2ce40p145c86jsn70f3bd17ced0',
              'X-RapidAPI-Host': 'instagram-media-downloader.p.rapidapi.com'
            }
          };
          
        //   axios.request(options).then(function (response) {
        //       console.log(response.data.video);
        //   }).catch(function (error) {
        //       console.error(error);
        //   });
    
          const response =await axios.request(options)
            
          const insta_vido_link=await response.data.video 
          return insta_vido_link
    } catch (error) {
        console.log(error+"")
    }


}

module.exports={
    tiktok_downloader
}


